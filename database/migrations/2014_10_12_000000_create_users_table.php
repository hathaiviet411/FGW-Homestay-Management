<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('full_name')->required();
            $table->integer('department_id')->required();
            $table->integer('role_id')->required();
            $table->integer('contract_id')->required();
            $table->integer('position_id')->required();
            $table->string('email')->unique()->required();
            $table->dateTime('dob')->required();
            $table->dateTime('participated_date')->required();
            $table->string('address')->required();
            $table->string('phone_number')->required();
            $table->integer('is_retired')->nullable();
            $table->string('avatar')->nullable();
            $table->string('password')->required();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
