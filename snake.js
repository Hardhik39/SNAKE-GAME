class c_snake
{
          constructor(l_x,l_y,l_size,l_length,l_activelength)
		{
		   this.Snake_array = new Array(l_length);
		
			this.Temp_XPos_Array = new Array((l_length) * l_size);
			this.Temp_YPos_Array = new Array((l_length) * l_size);
			this.Temp_Pos_Array_Len = this.Temp_XPos_Array.length;
		   this.Temp_Xpos_Value=0;
			this.Temp_Ypos_Value=0;
			this.sum=0;
			
			this.Snake_Xpos = l_x;
			
		   this.Snake_Ypos = l_y;
			
		   this.Snake_size = l_size;
		   this.Snake_length = l_length;
			this.active_snake_length=l_activelength;
		   this.snake_speed = 10;
		   
			this.MoveLeft_flag = 0;
	       this.MoveRight_flag = 0;
		   this.MoveUp_flag = 0;
		   this.MoveDown_flag = 0;
			this.SizeUp_flag=0;
			this.SizeDown_flag=0;
			this.PLAYER1_GAMEENDING_FLAG=0;
		    this.stop=0;
			this.speed_stop=0;
			this.stop1=0;
			this.speed_stop1=0;
			this.game_stop=0;
			this.snake_character=0;
			this.score=0;

			this.snake_food=new c_food();			
		    
		}
	

	    m_Inital_snake()
	      {
			  for(this.i=0 ; this.i<this.Snake_length ; this.i++)
				{
					  								
				  this.Snake_array[this.i]=new c_box(this.Snake_Xpos,this.Snake_Ypos,this.Snake_size,this.Snake_size);
				  this.Snake_Xpos-=this.Snake_size;

				}
			  
			  this.Temp_Xpos_Value=this.Snake_array[0].X;
			  for(this.j=0;this.j<=this.Temp_Pos_Array_Len;this.j++)
				  {
					   
					  this.Temp_XPos_Array[this.j]=this.Temp_Xpos_Value--;
					  this.Temp_YPos_Array[this.j]=this.Snake_array[0].Y;
					 
				  }
			  
			  
			  
			  
			  
			  
			  
		  }
	   m_Draw_Snake(l_context)
	    {
			for(this.i=0;this.i<this.active_snake_length;this.i++)
				  {
					  
					  
					  this.Snake_array[0].color="#000000";
					  this.Snake_array[this.i].m_drawbox(l_context);
				  }
			 this.snake_food.m_drawfood(l_context);
		
	    }
	m_draw_food(l_context)
	{
					 this.snake_food.m_drawfood(l_context);
	}
	m_draw_score(l_context)
	{
		l_context.font="35px Arial";
		l_context.fillStyle="#0a0909";
        l_context.fillText(" PLAYER 1 : "+this.score,50,50);
            
	}
	  m_move_snake()
		{ 
			if(this.game_stop==0)
				{
				if(this.MoveLeft_flag == 1 || this.MoveRight_flag == 1 ||
				  this.MoveUp_flag == 1 || this.MoveDown_flag == 1 )
				   {
						for(this.i=0;this.i<this.snake_speed;this.i++)
						{

							for(this.j=this.Temp_Pos_Array_Len-1;this.j>0;this.j--)
							  {

								  this.Temp_XPos_Array[this.j] = this.Temp_XPos_Array[this.j-1];
								  this.Temp_YPos_Array[this.j] = this.Temp_YPos_Array[this.j-1];

							  }
							if(this.MoveRight_flag == 1  )
								{
									this.Temp_XPos_Array[0]++; 
								}
							if(this.MoveLeft_flag == 1 )
								{
									this.Temp_XPos_Array[0]--; 
								}
							if(this.MoveDown_flag == 1 )
								{
									this.Temp_YPos_Array[0]++; 
								}
							if(	this.MoveUp_flag == 1 )
								{
									this.Temp_YPos_Array[0]--; 
								}



						}

					   var indx = 0;
					   for(this.k=0;this.k<this.Snake_length;this.k++)
						   {
							  this.Snake_array[this.k].X=this.Temp_XPos_Array[indx];
							   this.Snake_array[this.k].Y=this.Temp_YPos_Array[indx];
							   indx+=this.Snake_size;

						   }




			   		}
				}
			
		
			
				   
			
	}
			
	
	m_snake_wall_collision(l_canvas)
	{
		
		 if(this.Snake_array[0].X>=l_canvas.width- this.Snake_size)
            {
                //this.Snake_array[0].X = l_canvas.width - this.Snake_size;
			     this.game_stop=1;
				console.log(this.Snake_array[0].X);
                this.PLAYER1_GAMEENDING_FLAG=1;
                
            }
		                
        if( this.Snake_array[0].X <= 0)
            {
                //this.Snake_array[0].X = 0;
				this.game_stop=1;
				this.PLAYER1_GAMEENDING_FLAG=1;
                
            }
		if(( this.Snake_array[0].Y+ this.Snake_size)>=l_canvas.height)
            {
                 //this.Snake_array[0].Y = l_canvas.height - this.Snake_size;
				this.game_stop=1;
                this.PLAYER1_GAMEENDING_FLAG=1;
                
            }
        if( this.Temp_YPos_Array[0] <= 0)
            {
                 //this.Snake_array[0].Y = 0;
				this.game_stop=1;
				this.PLAYER1_GAMEENDING_FLAG=1;
				
                
            }
        
	}
	m_snake_food_collision()
	{
		if (this.Snake_array[0].X + this.Snake_size >= this.snake_food.food_X &&
            this.Snake_array[0].X <= this.snake_food.food_X + this.snake_food.size &&
            this.Snake_array[0].Y + this.Snake_size >= this.snake_food.food_Y &&
             this.Snake_array[0].Y <= this.snake_food.food_Y + this.snake_food.size)
			{
				this.score++;
				this.snake_food.food_X=Math.floor(Math.random() * 1450-this.snake_food.size) + this.snake_food.size;
				
                 this.snake_food.food_Y=Math.floor(Math.random() * 850-this.snake_food.size) + this.snake_food.size;
				this.snake_character=Math.floor(Math.random() * (3-1)) + 1;
				if(this.snake_character==1)
                        {
                            this.snake_speed=parseInt((Math.random()*(40-5))+5);
                        }
                    if(this.snake_character==2)
                        {
                            this.active_snake_length=parseInt((Math.random()*(50-3))+3);
                        }
                    if(this.snake_character==3)
                        {
                            this.snake_size=parseInt((Math.random()*(150-50))+50);
                        }
			}
	}
    
 
	
}