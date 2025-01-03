<?php

namespace App\Http\Controllers\Api;

use App\Models\Karyawan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\KaryawanController;

class KaryawanController extends Controller
{
    // Menampilkan daftar karyawan
    public function index()
    {
        return response()->json(Karyawan::all(), 200);
    }

    // Menyimpan karyawan baru
    public function store(Request $request)
    {
        $request->validate([
            'nip' => 'required|string|max:255',
            'nama' => 'required|string|max:255',
            'jabatan' => 'required|string|max:255',
            'id_departemens' => 'required|integer|exists:departemens,id',
        ]);

        $karyawan = Karyawan::create($request->all());

        return response()->json($karyawan, 201);
    }

    // Menampilkan karyawan berdasarkan ID
    public function show($id)
    {
        $karyawan = Karyawan::find($id);

        if (is_null($karyawan)) {
            return response()->json(['message' => 'Karyawan not found'], 404);
        }

        return response()->json($karyawan, 200);
    }

    // Memperbarui data karyawan
    public function update(Request $request, $id)
    {
        $request->validate([
            'nip' => 'sometimes|required|string|max:255',
            'nama' => 'sometimes|required|string|max:255',
            'jabatan' => 'sometimes|required|string|max:255',
            'id_departemens' => 'sometimes|required|integer|exists:departemens,id',
        ]);

        $karyawan = Karyawan::find($id);

        if (is_null($karyawan)) {
            return response()->json(['message' => 'Karyawan not found'], 404);
        }

        $karyawan->update($request->all());

        return response()->json($karyawan, 200);
    }

    // Menghapus karyawan
    public function destroy($id)
    {
        $karyawan = Karyawan::find($id);

        if (is_null($karyawan)) {
            return response()->json(['message' => 'Karyawan not found'], 404);
        }

        $karyawan->delete();

        return response()->json(null, 204);
    }
}
