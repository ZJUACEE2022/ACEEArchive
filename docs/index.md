# Welcome to ACEE Archive

本网页用于在 ACEERs 间进行学习资源的分享，我们欢迎每一位 ACEERs 为这个资源库增添思维的火花。

原神关闭！

## 自定义你的 ACEEA

单击右上角的按钮可以切换亮色或暗色模式。

单击以下按钮设置你所喜欢的网页主题色。

<div class=mdx-switch> 
    <button data-md-color-primary=red><code>red</code></button> 
    <button data-md-color-primary=pink><code>pink</code></button> 
    <button data-md-color-primary=purple><code>purple</code></button> 
    <button data-md-color-primary=deep-purple><code>deep purple</code></button> 
    <button data-md-color-primary=indigo><code>indigo</code></button>
    <button data-md-color-primary=blue><code>blue</code></button> 
    <button data-md-color-primary=light-blue><code>light blue</code></button>
    <button data-md-color-primary=cyan><code>cyan</code></button> 
    <button data-md-color-primary=teal><code>teal</code></button>
    <button data-md-color-primary=green><code>green</code></button> 
    <button data-md-color-primary=light-green><code>light green</code></button> 
    <button data-md-color-primary=lime><code>lime</code></button>
    <button data-md-color-primary=yellow><code>yellow</code></button> 
    <button data-md-color-primary=amber><code>amber</code></button> 
    <button data-md-color-primary=orange><code>orange</code></button> 
    <button data-md-color-primary=deep-orange><code>deep orange</code></button> 
    <button data-md-color-primary=brown><code>brown</code></button> 
    <button data-md-color-primary=grey><code>grey</code></button> 
    <button data-md-color-primary=blue-grey><code>blue grey</code></button> 
    <button data-md-color-primary=black><code>black</code></button> 
    <button data-md-color-primary=white><code>white</code></button> 
</div>
<script>
  var buttons = document.querySelectorAll("button[data-md-color-primary]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-primary")
      document.body.setAttribute("data-md-color-primary", attr)
      var name = document.querySelector("#__code_1 code span.l")
      name.textContent = attr.replace("-", " ")
    })
  })
</script>