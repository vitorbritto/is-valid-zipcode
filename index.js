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

        var validate = validate || {};

        // VALIDATE METHOD
        validate.inputZipCode = function(zipcode) {

            var zipCodePattern = /^[0-9]{5}\-[0-9]{3}$/;
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

