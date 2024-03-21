class c_HOME_PAGE 
{
	constructor() 
	{
		this.start_x = 650;
		this.start_y = 350;
		this.start_width = 200;
		this.start_height = 70;
		this.instruction_x = 600;
		this.instruction_y = 450;
		this.instruction_width = 300;
		this.instruction_height = 70;
	}
	m_draw_HOME_PAGE(l_context) 
	{
		l_context.font = "100px Arial";
		l_context.fillStyle = "#000000";
		l_context.fillText(" SNAKE GAME ", 400, 200);
		l_context.fillStyle = "#ffbd0a";
		l_context.fillRect(this.start_x, this.start_y, this.start_width, this.start_height);
		l_context.strokeStyle = "#0f0f0f";
		l_context.strokeRect(this.start_x, this.start_y, this.start_width, this.start_height);
		l_context.font = "30px Arial";
		l_context.fillStyle = "#000000"
		l_context.fillText("START", 705, 395);
		l_context.fillStyle = "#ffbd0a";
		l_context.fillRect(this.instruction_x, this.instruction_y, this.instruction_width, this.instruction_height);
		l_context.strokeStyle = "#0f0f0f";
		l_context.strokeRect(this.instruction_x, this.instruction_y, this.instruction_width, this.instruction_height);
		l_context.font = "30px Arial";
		l_context.fillStyle = "#000000"
		l_context.fillText("INTRUCTIONS", 655, 495);
	}
}
class c_INFO_PAGE 
{
	constructor() 
	{
		this.close_x = 1400;
		this.close_y = 100;
		this.close_width = 30;
		this.close_height = 30;
	}
	m_draw_INFO_PAGE(l_context) 
	{
		l_context.font = "70px Arial";
		l_context.fillStyle = "#000000";
		l_context.fillText(" INSTRUCTIONS ", 500, 250);
		l_context.fillStyle = "#ff2700";
		l_context.fillRect(this.close_x, this.close_y, this.close_width, this.close_height);
		l_context.strokeStyle = "#0f0f0f";
		l_context.strokeRect(this.close_x, this.close_y, this.close_width, this.close_height);
		l_context.font = "50px Arial";
		l_context.fillStyle = "#000000"
		l_context.fillText("x", 1403, 128);
				l_context.font = "30px Arial";
				l_context.fillStyle = "#0b0b0b"
		l_context.fillText("PLAYER 1",200,350);
		l_context.font = "30px Arial";
				l_context.fillStyle = "#0b0b0b"
	l_context.fillText("UP,DOWN,RIGHT,LEFT ARROWS FOR MOVING", 200,400);
		l_context.font = "30px Arial";
				l_context.fillStyle = "#0b0b0b"
		l_context.fillText("PLAYER 2",200,500);
		l_context.font = "30px Arial";
				l_context.fillStyle = "#0b0b0b"
	l_context.fillText("W,S,A,D BUTTONS FOR MOVING", 200,550);
	}
}
class c_GAMEOVER_PAGE 
{
	constructor() 
	{
		this.home_x = 500;
		this.home_y = 550;
		this.home_width = 200;
		this.home_height = 70;
		this.restart_x = 750;
		this.restart_y = 550;
		this.restart_width = 200;
		this.restart_height = 70;
	}
	m_draw_GAMEOVER_PAGE(l_context) 
	{
		l_context.font = "100px Arial";
		l_context.fillStyle = "#000000";
		l_context.fillText(" GAME OVER ", 400, 200);
		l_context.fillStyle = "#ffbd0a";
		l_context.fillRect(this.home_x, this.home_y, this.home_width, this.home_height);
		l_context.strokeStyle = "#0f0f0f";
		l_context.strokeRect(this.home_x, this.home_y, this.home_width, this.home_height);
		l_context.font = "30px Arial";
		l_context.fillStyle = "#000000";
		l_context.fillText("HOME", 555, 595);
		l_context.fillStyle = "#ffbd0a";
		l_context.fillRect(this.restart_x, this.restart_y, this.restart_width, this.restart_height);
		l_context.strokeStyle = "#0f0f0f";
		l_context.strokeRect(this.restart_x, this.restart_y, this.restart_width, this.restart_height);
		l_context.font = "30px Arial";
		l_context.fillStyle = "#000000";
		l_context.fillText("RESTART", 780, 595);
if(Start_S==1)
	{
			
				if(g_snake.PLAYER1_GAMEENDING_FLAG==1&&g_snake_2.PLAYER2_GAMEENDING_FLAG==0)
					{
                            l_context.font="50px Arial";
			                l_context.fillStyle="#0a0909";
                            l_context.fillText(" YOUR SCORE : "+g_snake.score,530,400);
					}
	}
			
		
	if(Start_M==1)	
		{
		if(g_snake.PLAYER1_GAMEENDING_FLAG==1&& g_snake.score<Score_2)
						{
							l_context.font="50px Arial";
			                l_context.fillStyle="#0a0909";
                            l_context.fillText(" PLAYER 2 WON ",530,400);
						}
					if(g_snake_2.PLAYER2_GAMEENDING_FLAG==1&& g_snake.score>Score_2)
						{
							l_context.font="50px Arial";
			                l_context.fillStyle="#0a0909";
                             l_context.fillText(" PLAYER 1 WON ",530,400);
						}
					if(g_snake.PLAYER1_GAMEENDING_FLAG==1 && g_snake_2.PLAYER2_GAMEENDING_FLAG==1&&g_snake.score==Score_2)
						{
                             l_context.font="50px Arial";
			                 l_context.fillStyle="#0a0909";
                             l_context.fillText(" DRAW GAME " ,550,400);
						}
		}
			
	}
}
class c_MULTIPLAYER_PAGE 
{
	constructor() 
	{
		
		this.singlep_x = 350;
		this.singlep_y = 350;
		this.singlep_width = 200;
		this.singlep_height = 70;
		this.multip_x = 950;
		this.multip_y = 350;
		this.multip_width = 300;
		this.multip_height = 70;
	}
	m_draw_MULTIPLAYER_PAGE(l_context) 
	{
		l_context.font = "100px Arial";
		l_context.fillStyle = "#000000";
		l_context.fillText(" PLAYERS ", 500, 200);
		l_context.fillStyle = "#ffbd0a";
		l_context.fillRect(this.singlep_x, this.singlep_y, this.singlep_width, this.singlep_height);
		l_context.strokeStyle = "#0f0f0f";
		l_context.strokeRect(this.singlep_x, this.singlep_y, this.singlep_width, this.singlep_height);
		l_context.font = "30px Arial";
		l_context.fillStyle = "#000000"
		l_context.fillText("SINGLE", 395, 395);
		l_context.fillStyle = "#ffbd0a";
		l_context.fillRect(this.multip_x, this.multip_y, this.multip_width, this.multip_height);
		l_context.strokeStyle = "#0f0f0f";
		l_context.strokeRect(this.multip_x, this.multip_y, this.multip_width, this.multip_height);
		l_context.font = "30px Arial";
		l_context.fillStyle = "#000000"
		l_context.fillText("MULTIPLAYER", 1005, 395);
	}
}