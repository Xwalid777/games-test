<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Game;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $games = [

        // [
        //     'name' => '8 Ball Pool',
        //     'img' => 'https://static-prod-web.miniclip.com/assets/games/MN_Website_WebGames_8BP_PageThumbnail.jpg',
        //     'price' => 0,
        //     'type' => "mobile",
        //     'downloads' => 460000000,
        // ],
    ];


        foreach ($games as $gameData) {
            Game::create($gameData);
        }
    }
}
