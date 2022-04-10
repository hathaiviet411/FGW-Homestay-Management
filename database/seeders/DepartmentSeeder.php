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
        $list_department = [
          'Ban Lễ Tân',
          'Ban Quản Lý',
          'Ban Vệ Sinh',
          'Ban Bảo Trì',
          'Ban An Ninh',
          'Ban Kỹ Thuật',
          'Ban Tổ Chức Sự Kiện',
        ];

        foreach ($list_department as $department_name) {
          $check = Department::where('department_name', $department_name)->first();
          if (!$check) {
              Department::create([
                  'department_name' => $department_name,
                  'department_address' => 'Toà A',
                  'department_manager' => 1,
                  'total_staff' => 0,
                  'organized_date' => '2020-01-01',
              ]);
          }
      }
    }
}
