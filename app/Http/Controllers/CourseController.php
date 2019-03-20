<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\course;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $course = course::all();
        return response()
            ->json($course);
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
        course::create($request->all());
        return response()
            ->json(['message' => 'Success: You have added an user']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $course = course::find($id);
        if (! $course) {
            return response()
            ->json(['error' => 'The user is not exists']);
        }
        return response()
            ->json($course);
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
        $course = course::find($id);
        if (! $course) {
            return response()
            ->json(['error' => 'Error: User not found']);
        }
        $course->update($request->all());
        return response()
            ->json(['message' => 'Success: You have updated the user']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $course = course::find($id);
        if (! $course) {
            return response()
            ->json(['error' => 'Error: User not found']);
        }
        $course->delete();
        return response()
            ->json(['message' => 'Success: You have deleted the user']);
    }
}
