<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    // relationships
    public function qustion()
    {
        return $this->belongsTo(Question::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

     public function likes(){
         return $this->hasMany(Like::class);
     }
       
}
