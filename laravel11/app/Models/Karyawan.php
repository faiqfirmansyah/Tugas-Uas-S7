<?php

namespace App\Models;

use App\Models\Karyawan;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Karyawan extends Model
{
    use HasFactory;

    protected $fillable = [
        'nip',
        'nama',
        'jabatan',
        'id_departemens',
    ];

    public function departemen()
    {
        return $this->belongsTo(Departemen::class, 'id_departemen');
    }

    public function absensis()
    {
        return $this->hasMany(Absensi::class, 'id_karyawan');
    }

    public function jadwalKerja()
    {
        return $this->hasMany(JadwalKerja::class, 'id_karyawan');
    }
}

