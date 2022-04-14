<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Department;
use App\Http\Controllers\Controller;
class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        $department_list = Department::paginate(10);
        $response = [
          'status' => 200,
          'result' => $department_list,
        ];

        return response()->json($response);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Department::create([
          'department_name' => $request['department_name'],
          'department_address' => $request['department_address'],
          'department_manager' => $request['department_manager'],
          'organized_date' => $request['organized_date'],
        ]);

        $response = [
          'status' => 200,
          'message' => 'Department created successfully',
        ];

        return response()->json($response);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
      $department = Department::find($id);
        
      $response = [
        'status' => 200,
        'result' => $department,
      ];

      return response()->json($response);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $department = Department::find($id);

        $department->department_name = $request['department_name'];
        $department->department_address = $request['department_address'];
        $department->department_manager = $request['department_manager'];
        $department->organized_date = $request['organized_date'];
        $department->save();

        $response = [
          'status' => 200,
          'message' => 'Department updated successfully',
        ];

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Department::where('id', $id)->delete();

        $response = [
          'status' => 200,
          'message' => 'Department deleted successfully',
        ];

        return response()->json($response);
    }
}
