<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', ['name' => 'Mike']);
});

Route::get('/about', function () {
    return Inertia::render('About/About');
});