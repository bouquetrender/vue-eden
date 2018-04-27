export function convertImgToDataURLviaCanvas(url, callback, outputFormat) {
  let img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
      let canvas = document.createElement('CANVAS');
      let ctx = canvas.getContext('2d');
      let dataURL;
      canvas.height = this.height;
      canvas.width = this.width;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL(outputFormat);
      callback(dataURL);
      canvas = null; 
  };
  img.src = url;
}

// TODO: need refactor
export function convertFileToDataURLviaFileReader(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = () => {
      let reader = new FileReader();
      reader.onloadend = function () {
          callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.send();
}

function dataURLtoBlob(dataurl) {
  let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
  bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {type:mime});
} 
