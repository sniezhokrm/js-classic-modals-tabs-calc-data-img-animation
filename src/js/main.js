import "./slider";
import modals from "./modals/modals";
import tabs from './modals/tabs';
import forms from './modals/forms';
import changeModalState from "./modals/changeModalState";
import timer from './modals/timer';
import images from './modals/images';

window.addEventListener('DOMContentLoaded', () => {
  "use strict";
  const modalFormState = {},
  timeEndAction = "2021-09-10";

  timer(".container1", timeEndAction);
  modals(modalFormState);
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  forms(modalFormState);
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', "inline-block");
  changeModalState(modalFormState);
  images();
})
