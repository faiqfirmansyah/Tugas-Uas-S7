<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AbsensiController;
use App\Http\Controllers\Api\KaryawanController;
use App\Http\Controllers\Api\DepartemenController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('/karyawans', KaryawanController::class);
Route::apiResource('/departemens', DepartemenController::class);
Route::apiResource('/absensis', AbsensiController::class);