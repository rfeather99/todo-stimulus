// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require_tree .

/**
 * アンカーリンクにdata-turbolinks="false"を付与する
 */
function addTurbolinksFalseToAnchorLinks() {
  /** a要素を取得 */
  const links = document.querySelectorAll('a');

  links.forEach((link) => {
    /** リンクがクリックされた時 */
    link.addEventListener('click', (event) => {
      /** リンクに「#」が含まれていた場合 */
      if (link.href && link.href.match(/[#]/)) {
        /** リンクにdata-turbolinks="false"を付与 */
        event.target.setAttribute('data-turbolinks', 'false');
      }
    }, false);
  });
}

/** ページロード時にaddTurbolinksFalseToAnchorLinksを呼ぶ */
document.addEventListener('turbolinks:load', () => {
  addTurbolinksFalseToAnchorLinks();
}, false);
