<?php

namespace App\Models;

use App\Models\Departemen;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Departemen extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
    ];

    public function karyawans()
    {
        return $this->hasMany(Karyawan::class, 'id_departemen');
    }
}
