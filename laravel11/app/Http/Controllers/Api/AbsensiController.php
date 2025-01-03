<?php

namespace App\Http\Controllers\Api;

use App\Models\Absensi;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\AbsensiController;

class AbsensiController extends Controller
{
    // Menampilkan daftar absensi
    public function index()
    {
        return response()->json(Absensi::all(), 200);
    }

    // Menyimpan absensi baru
    public function store(Request $request)
    {
        $request->validate([
            'id_karyawans' => 'required|integer|exists:karyawans,id',
            'tanggal' => 'required|date',
            'jam_masuk' => 'nullable|date_format:H:i:s',
            'jam_keluar' => 'nullable|date_format:H:i:s',
            'status' => 'required|in:hadir,izin,sakit,tidak hadir',
        ]);

        $absensi = Absensi::create($request->all());

        return response()->json($absensi, 201);
    }

    // Menampilkan absensi berdasarkan ID
    public function show($id)
    {
        $absensi = Absensi::find($id);

        if (is_null($absensi)) {
            return response()->json(['message' => 'Absensi not found'], 404);
        }

        return response()->json($absensi, 200);
    }

    // Memperbarui data absensi
    public function update(Request $request, $id)
    {
        $request->validate([
            'id_karyawans' => 'sometimes|required|integer|exists:karyawans,id',
            'tanggal' => 'sometimes|required|date',
            'jam_masuk' => 'nullable|date_format:H:i:s',
            'jam_keluar' => 'nullable|date_format:H:i:s',
            'status' => 'sometimes|required|in:hadir,izin,sakit,tidak hadir',
        ]);

        $absensi = Absensi::find($id);

        if (is_null($absensi)) {
            return response()->json(['message' => 'Absensi not found'], 404);
        }

        $absensi->update($request->all());

        return response()->json($absensi, 200);
    }

    // Menghapus absensi
    public function destroy($id)
    {
        $absensi = Absensi::find($id);

        if (is_null($absensi)) {
            return response()->json(['message' => 'Absensi not found'], 404);
        }

        $absensi->delete();

        return response()->json(null, 204);
    }
}

