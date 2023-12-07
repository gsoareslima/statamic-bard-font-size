import GslFontSize from './GslFontSize';
import GslFontSizeMenu from './GslFontSizeMenu.vue';
const { Mark } = Statamic.$bard.tiptap.core;

Statamic.$bard.addExtension(() => Mark.create(new GslFontSize()));
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