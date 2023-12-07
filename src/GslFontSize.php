<?php

namespace Gsl\StatamicBardFontSize;

use Tiptap\Core\Mark;

class GslFontSize extends Mark
{
    protected $markType = 'GslFontSize';
    protected $tagName = 'span';

    public function matching(): bool
    {
        return $this->mark->type === $this->markType;
    }

    public function tag(): ?array
    {
        $style = 'font-size: ';
        switch ($this->mark->attrs->key) {
            case 'text-xs':
                $style .= '0.75rem;';
            break;
            case 'text-sm':
                $style .= '0.875rem;';
            break;
            case 'text-base':
                $style .= '1rem;';
            break;
            case 'text-lg':
                $style .= '1.125rem;';
            break;
            case 'text-xl':
                $style .= '1.25rem;';
            break;
            case 'text-2xl':
                $style .= '1.5rem;';
            break;
            case 'text-3xl':
                $style .= '1.875rem;';
            break;
            case 'text-4xl':
                $style .= '2.25rem;';
            break;
            case 'text-5xl':
                $style .= '3rem;';
            break;
            case 'text-6xl':
                $style .= '3.75rem;';
            break;
            case 'text-7xl':
                $style .= '4.5rem;';
            break;
            case 'text-8xl':
                $style .= '6rem;';
            break;
            case 'text-9xl':
                $style .= '8rem;';
            break;
        }

        return [
            [
                'tag'   => 'span',
                'attrs' => [
                    'class' => 'gsl-font-size',
                    'style' => $style
                ],
            ],
        ];
    }
}