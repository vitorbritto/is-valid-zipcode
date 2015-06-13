/*!
 * Copyright 2015, All Rights Reserved.
 *
 * Code licensed under the MIT License:
 * http://vitorbritto.mit-license.org/
 *
 * Author: Vitor Britto <code@vitorbritto.com.br>
 */


(function(window, document, undefined) {

    'use strict';

    var isValid = (function() {

        var zipcodes = require('zipcodes-regex');

        var validate = validate || {};

        // VALIDATE METHOD
        validate.inputZipCode = function(zipcode, country) {

            if (typeof country === 'undefined') {
                country = 'BR';
            }

            if (!zipcodes[country]) {
                return false;
            }

            var zipCodePattern = zipcodes[country];
            return zipCodePattern.test(zipcode);

        };

        // INITIALIZE MODULE
        return {
            zipcode: validate.inputZipCode
        };

    })();

    // Global
    window.isValid = isValid;

})(window, document);
