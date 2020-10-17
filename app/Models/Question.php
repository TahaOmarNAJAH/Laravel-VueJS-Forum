<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Question extends Model
{   
    protected static function boot(){
        parent::boot();
        static::creating(function($question){
            $question->slug = Str::slug($question->title);
        });
    }

    public function getRouteKeyName()
    {
        // show  questions by slug instead of Id
        return 'slug';
    }

    //fields that you want to save  
    // use $guarded =[] to ignore  
    protected $fillable = ['title', 'slug', 'body', 'category_id', 'user_id'];

    public function getPathAttribute(){
        return "/question/$this->slug";
    }


    // relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected $with = ['replies'];
    
    public function replies()
    {
        return $this->hasMany(Reply::class)->latest();
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
