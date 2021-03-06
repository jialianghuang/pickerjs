export default (
  '<div class="picker" data-picker-action="hide" touch-action="none" tabindex="-1" role="dialog">'
    + '<div class="picker-dialog" role="document">'
      + '<div class="picker-header">'
        + '<h4 class="picker-title">{{ title }}</h4>'
        + '<button type="button" class="picker-close" data-picker-action="hide" aria-label="Close">&times;</button>'
      + '</div>'
      + '<div class="picker-body">'
        + '<div class="picker-grid"></div>'
      + '</div>'
      + '<div class="picker-footer">'
        + '<button type="button" class="picker-cancel" data-picker-action="hide">{{ cancel }}</button>'
        + '<button type="button" class="picker-confirm" data-picker-action="pick">{{ confirm }}</button>'
      + '</div>'
    + '</div>'
  + '</div>'
);
