<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Department;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $list = [
            'Ban Lễ Tân',
            'Ban Quản Lý',
            'Ban Vệ Sinh',
            'Ban Kỹ Thuật',
            'Ban An Ninh',
        ];
        foreach ($list as $key => $department_name) {
            $check = Department::where('department_name', $department_name)->first();
            if (!$check) {
                Department::create([
                    'department_name' => $department_name,
                    'organized_date' => '2020-01-01 00:00:00',
                ]);
            }
        }
    }
}


