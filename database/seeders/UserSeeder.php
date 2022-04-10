<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (!User::first()) {
            $user = User::create([
                'user_code' => 111111,
                'password' => '123456789',
                'full_name' => 'Hà Thái Việt'
            ]);

            $role = Role::findByName(ROLE_ADMINISTRATOR, 'api');
            $user->syncRoles($role);

            $user = User::create([
                'user_code' => 666666,
                'password' => '123456789',
                'full_name' => 'Mèo Mặt Trăng',
            ]);

            $role = Role::findByName(ROLE_MANAGER, 'api');
            $user->syncRoles($role);

            $user = User::create([
                'user_code' => 666666,
                'password' => '123456789',
                'full_name' => 'Sói Vệ Sinh',
            ]);

            $role = Role::findByName(ROLE_STAFF, 'api');
            $user->syncRoles($role);
        }
    }
}
