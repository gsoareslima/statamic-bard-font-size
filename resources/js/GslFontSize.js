export default class GslFontSize {
    name() {
        return "GslFontSize";
    }

    schema() {
        return {
            attrs: {
                key: '',
            },
            parseDOM: [
                {
                    tag: "span.gsl-font-size",
                    getAttrs: (dom) => ({
                        key: dom.getAttribute('data-class')
                    })
                }
            ],
            toDOM: (mark) => {
                let style = 'font-size: ';
                switch (mark.attrs.key) {
                    case 'text-xs':
                        style += '0.75rem;';
                    break;
                    case 'text-sm':
                        style += '0.875rem;';
                    break;
                    case 'text-base':
                        style += '1rem;';
                    break;
                    case 'text-lg':
                        style += '1.125rem;';
                    break;
                    case 'text-xl':
                        style += '1.25rem;';
                    break;
                    case 'text-2xl':
                        style += '1.5rem;';
                    break;
                    case 'text-3xl':
                        style += '1.875rem;';
                    break;
                    case 'text-4xl':
                        style += '2.25rem;';
                    break;
                    case 'text-5xl':
                        style += '3rem;';
                    break;
                    case 'text-6xl':
                        style += '3.75rem;';
                    break;
                    case 'text-7xl':
                        style += '4.5rem;';
                    break;
                    case 'text-8xl':
                        style += '6rem;';
                    break;
                    case 'text-9xl':
                        style += '8rem;';
                    break;
                }
                
                return [
                    "span",
                    {
                        'class': 'gsl-font-size',
                        'data-class': mark.attrs.key,
                        'style': style
                    },
                    0,
                ];
            }
        };
    }

    commands({type, updateMark, removeMark}) {
        return attrs => {
            if (attrs.key) {
                return updateMark(type, attrs)
            }

            return removeMark(type)
        }
    }

    pasteRules({type}) {
        return [];
    }

    plugins() {
        return [];
    }
}