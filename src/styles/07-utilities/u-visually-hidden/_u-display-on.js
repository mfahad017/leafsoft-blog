// import debounce  from "lodash/debounce";

(($) => {
  /**
   * m-reward-reload-card
   *
   * Generates a ErgoComponent instance with an empowered render function.
   * Review the /modules/custom/ergo_core/assets/scripts/ErgoComponent.js
   */
  new Ergo.component({
    // The component to target and bem  naming
    name: 'u-display-on--desktop-only',
    options: {
      oneOff: false, // whether or not to run one and never again
      behaviour: true, // whether or not to run as a Drupal behaviour
      debugging: false, // whether or not to display debugging
    },
    /**
     * Init will fire before the render methods, for any common initialization
     * code potentially shared between the two. Or, for one off ran components,
     * it's an ideal place to set up event binds and use class methods vs
     * renders.
     */
    // init() {
    // },
    /**
     * Process all entries for more global interactions to avoid excessive
     * processing that might not be performant at the local level.
     *
     * @param {Object} $entries
     */
    renderEntries($entries) {
      this.$w.on('load.display-on resize.display-on', (e) => {
        const $els = $('.u-display-on--desktop-only, .u-display-on--mobile-only');
        // For this not displaying at the current rez, they should be aria
        // hidden.
        $els.filter(':not(:visible)').attr('aria-hidden', true);

        // Those that are displaying, shouldn't be aria hidden.
        $els.filter(':visible').removeAttr('aria-hidden');
      });
    },
    /**
     * Process individual element rendering here, which are looped through based
     * on the option to run as a oneOff or a Drupal behaviour.
     *
     * @param {Object} el    Raw DOM element instance
     * @param {number} index Index within $(entries) jQuery array
     */
    // renderEntry(el, index) {
    //   const $el = $(el);
    //
    //   /**
    //    * this.bem(string)
    //    *
    //    * You can use .bem to easily target sub-components within this
    // element. This * removes the messy/unneeded step of writing out the
    // component name over * and over */ //$el.find(this.bem('__item'))...
    // //$el.find(this.bem('--variant'))... },
  });
})(jQuery);
