import angular from 'angular';

class UtilsDirective {

    constructor($timeout) {
        this.restrict = 'A';
        this.scope = {}
        this.$timeout = $timeout;
    }

    static create() {
        return new UtilsDirective(...arguments);
    }

    link(scope, element, attrs) {
        this.$timeout(() => element[0].focus());
    }

    
}

UtilsDirective.create.$inject = ['$timeout'];

export default UtilsDirective;