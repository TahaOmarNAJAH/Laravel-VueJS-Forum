<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    public function getRouteKeyName()
    {
        // show  questions by slug instead of Id
        return 'slug';
    }

    //fields that you want to save  
    // use $guarded =[] to ignore  
    protected $fillable = ['title', 'slug', 'body', 'category_id', 'user_id'];

    public function getPathAttribute(){
        return asset("api/question/$this->slug");
    }


    // relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
