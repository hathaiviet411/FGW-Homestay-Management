<?php
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['namespace' => 'App\Http\Controllers\Api'], function () {

    Route::group(['prefix' => 'auth'], function () {
        Route::post('login', 'AuthController@login');
        Route::post('register', 'AuthController@register');

    });
    Route::group(['middleware' => 'api'], function () {
        Route::group(['prefix' => 'auth'], function () {
            Route::post('refresh', 'AuthController@refresh');
        });
        Route::get('profile', 'AuthController@getProfile');
        Route::apiResource('user', 'UserController');
    });

    Route::post('receive-vehicles-data', "CloudController@store");

    Route::apiResource('user', "UserController");
    Route::apiResource('role', 'RoleController');
    Route::apiResource('department', 'DepartmentController');


    Route::get('system-config/list-status-and-type', "SystemConfigController@listStatusAndType");
    Route::get('system-config/year-conf', 'SystemConfigController@yearConf');
});

