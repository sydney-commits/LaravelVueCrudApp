<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use OpenAI\Client;

class ArticleController extends Controller
{



    public function index(Request $request)
{
    if ($request->title == null) {
        return;
    }

    $title = $request->title;

    $client = OpenAI::client(env('OPENAI_API_KEY'));
    
    $result = $client->completions()->create([
        "model" => "text-davinci-003",
        "temperature" => 0.7,
        "top_p" => 1,
        "frequency_penalty" => 0,
        "presence_penalty" => 0,
        'max_tokens' => 600,
        'prompt' => sprintf('Write article about: %s', $title),
    ]);

    $content = trim($result['choices'][0]['text']);


    return view('write', compact('title', 'content'));
}
}
