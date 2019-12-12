import html2canvas from 'html2canvas';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function genBase64(src) {
    return new Promise((resolve, rejects) => {
        if (src.match(/base64/))
            return resolve(src);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = src;
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx && ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = rejects;
    });
}
function parseHtml(html) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const imgList = html.querySelectorAll('img');
            const task = Array.from(imgList, item => genBase64(item.src));
            const urls = yield Promise.all(task);
            urls.forEach((url, i) => (imgList[i].src = url));
        }
        catch (e) {
            console.error(e, '图片错误');
            return e;
        }
        finally {
            return html;
        }
    });
}
function html2img(html, options) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const myCanvas = document.createElement('canvas');
            const width = html.offsetWidth;
            const height = html.offsetHeight;
            const { scale } = options;
            myCanvas.width = width * scale;
            myCanvas.height = height * scale;
            myCanvas.style.width = `${width}px`;
            myCanvas.style.height = `${height}px`;
            const canvas = yield html2canvas(html, {
                width,
                height,
                scale,
                useCORS: true,
                canvas: myCanvas,
                scrollX: 0,
                scrollY: 0,
                imageTimeout: 0
            });
            return canvas.toDataURL('image/jpeg', 1);
        }
        catch (e) {
            return Promise.resolve(e);
        }
    });
}

var index = (element, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { debug = false, scale = 2, base64 = false } = options || {};
    const html = base64 ? yield parseHtml(element) : element;
    document.body.appendChild(html);
    if (debug) {
        return Promise.resolve('');
    }
    const url = yield html2img(html, { scale });
    document.body.removeChild(html);
    return url;
});

export default index;
