const searchInput = document.queryselector("#search-input");
searchInput.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    search();
  }
});
function search() {
  const input = searchInput.value;
  window.location.href =
    "https://www.google.com/search?q=" +
    Input +
    "&sxsrf=APwXEdczqhtnnwsQFeeOss5MeBRIRtq4ZA%3A1683992698114&ei=erBfZLq-BqnWseMP1OOagAI&ved=0ahUKEwi648zU0fL-AhUpa2wGHdSxBiAQ4dUDCBA&uact=5&oq=" +
    Input +
    "&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQigUQJzIKCC4QsQMQigUQQzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzINCC4QigUQsQMQ1AIQQzIKCC4QigUQ1AIQQzIHCAAQigUQQzINCC4QigUQsQMQ1AIQQzIYCC4QsQMQigUQQxCXBRDcBBDeBBDgBBgBSgQIQRgAUABYAGDsCWgAcAF4AIABwwGIAcMBkgEDMC4xmAEAoAEBwAEB2gEGCAEQARgU&sclient=gws-wiz-serp";
}
