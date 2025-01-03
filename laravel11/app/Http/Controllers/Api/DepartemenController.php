<?php

namespace App\Http\Controllers\Api;

use App\Models\Departemen;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\DepartemenController;

class DepartemenController extends Controller
{
    // Menampilkan daftar departemen
    public function index()
    {
        return response()->json(Departemen::all(), 200);
    }

    // Menyimpan departemen baru
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
        ]);

        $departemen = Departemen::create($request->all());

        return response()->json($departemen, 201);
    }

    // Menampilkan departemen berdasarkan ID
    public function show($id)
    {
        $departemen = Departemen::find($id);

        if (is_null($departemen)) {
            return response()->json(['message' => 'Departemen not found'], 404);
        }

        return response()->json($departemen, 200);
    }

    // Memperbarui data departemen
    public function update(Request $request, $id)
    {
        $request->validate([
            'nama' => 'sometimes|required|string|max:255',
        ]);

        $departemen = Departemen::find($id);

        if (is_null($departemen)) {
            return response()->json(['message' => 'Departemen not found'], 404);
        }

        $departemen->update($request->all());

        return response()->json($departemen, 200);
    }

    // Menghapus departemen
    public function destroy($id)
    {
        $departemen = Departemen::find($id);

        if (is_null($departemen)) {
            return response()->json(['message' => 'Departemen not found'], 404);
        }

        $departemen->delete();

        return response()->json(null, 204);
    }
}

