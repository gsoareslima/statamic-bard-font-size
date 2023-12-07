<?php

namespace Gsl\StatamicBardFontSize;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/gsl-bard-font-size.js',
    ];
    
    protected $stylesheets = [
        __DIR__.'/../dist/css/gsl-bard-font-size.css'
    ];

    protected $publishables = [

    ];

    public function boot()
    {
        parent::boot();
        Augmentor::addExtension('gslFontSize', new GslFontSize());

        $this->publishes([
            __DIR__ . '/../public' => public_path('vendor/gsl-bard-font-size'),
        ], 'gsl-bard-font-size');
    }
}
