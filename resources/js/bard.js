import GslFontSize from './GslFontSize';
import GslFontSizeMenu from './GslFontSizeMenu.vue';

Statamic.$bard.extend(({mark}) => mark(new GslFontSize()));
Statamic.$bard.buttons(() => {
    return {
        name: 'gslfontsize',
        text: 'Font Size',
        command: 'classType',
        args: {
            key: ""
        },
        icon: 'gsl-font-size',
        component: GslFontSizeMenu
    };
});