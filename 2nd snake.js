class c_snake_2
{
          constructor(l_x,l_y,l_size,l_length,l_activelength)
		{
		   this.Snake_array_2 = new Array(l_length);
		
			this.Temp_XPos_Array_2 = new Array((l_length) * l_size);
			this.Temp_YPos_Array_2 = new Array((l_length) * l_size);
			this.Temp_Pos_Array_Len_2 = this.Temp_XPos_Array_2.length;
		   this.Temp_Xpos_Value_2=0;
			this.Temp_Ypos_Value_2=0;
			this.sum=0;
			
			this.Snake_Xpos_2 = l_x;
			
		   this.Snake_Ypos_2 = l_y;
			
		   this.Snake_size_2 = l_size;
		   this.Snake_length_2 = l_length;
			this.active_Snake_length_2=l_activelength;
		   this.snake_speed_2 = 10;
		   
			this.MoveLeft_flag_2 = 0;
	       this.MoveRight_flag_2 = 0;
		   this.MoveUp_flag_2 = 0;
		   this.MoveDown_flag_2 = 0;
             this.PLAYER2_GAMEENDING_FLAG=0;
		    this.stop_2=0;
			this.speed_stop_2=0;
			this.stop_21=0;
			this.speed_stop_21=0;
			this.game_stop_2=0;
			this.snake_character_2=0;

				
		    
		}
	

	    m_Inital_2snake()
	      {
			  for(this.i=0 ; this.i<this.Snake_length_2 ; this.i++)
				{
					  								
				  this.Snake_array_2[this.i]=new c_box(this.Snake_Xpos_2,this.Snake_Ypos_2,this.Snake_size_2,this.Snake_size_2);
				  this.Snake_Xpos_2-=this.Snake_size_2;

				}
			  
			  this.Temp_Xpos_Value_2=this.Snake_array_2[0].X;
			  for(this.j=0;this.j<=this.Temp_Pos_Array_Len_2;this.j++)
				  {
					   
					  this.Temp_XPos_Array_2[this.j]=this.Temp_Xpos_Value_2--;
					  this.Temp_YPos_Array_2[this.j]=this.Snake_array_2[0].Y;
					 
				  }
			  
			  
			  
			  
			  
			  
			  
		  }
	   m_Draw_2Snake(l_context)
	    {
			for(this.i=0;this.i<this.active_Snake_length_2;this.i++)
				  {
					  
					  
					  this.Snake_array_2[0].color="#000000";
					  this.Snake_array_2[this.i].m_drawbox(l_context);
				  }
			 
		
	    }
	
	  m_move_2snake()
		{ 
			if(this.game_stop_2==0)
				{
				if(this.MoveLeft_flag_2 == 1 || this.MoveRight_flag_2 == 1 ||
				  this.MoveUp_flag_2 == 1 || this.MoveDown_flag_2 == 1 )
				   {
						for(this.i=0;this.i<this.snake_speed_2;this.i++)
						{

							for(this.j=this.Temp_Pos_Array_Len_2-1;this.j>0;this.j--)
							  {

								  this.Temp_XPos_Array_2[this.j] = this.Temp_XPos_Array_2[this.j-1];
								  this.Temp_YPos_Array_2[this.j] = this.Temp_YPos_Array_2[this.j-1];

							  }
							if(this.MoveRight_flag_2 == 1  )
								{
									this.Temp_XPos_Array_2[0]++; 
								}
							if(this.MoveLeft_flag_2 == 1 )
								{
									this.Temp_XPos_Array_2[0]--; 
								}
							if(this.MoveDown_flag_2 == 1 )
								{
									this.Temp_YPos_Array_2[0]++; 
								}
							if(	this.MoveUp_flag_2 == 1 )
								{
									this.Temp_YPos_Array_2[0]--; 
								}



						}

					   var indx = 0;
					   for(this.k=0;this.k<this.Snake_length_2;this.k++)
						   {
							  this.Snake_array_2[this.k].X=this.Temp_XPos_Array_2[indx];
							   this.Snake_array_2[this.k].Y=this.Temp_YPos_Array_2[indx];
							   indx+=this.Snake_size_2;

						   }




			   		}
				}
			
		
			
				   
			
	}
			
	
	m_2snake_wall_collision(l_canvas)
	{
		
		 if(this.Snake_array_2[0].X>=l_canvas.width- this.Snake_size_2)
            {
                //this.Snake_array_2[0].X = l_canvas.width - this.Snake_size_2;
			     this.game_stop_2=1;
				this.PLAYER2_GAMEENDING_FLAG=1;
                
                
            }
		                
        if( this.Snake_array_2[0].X <= 0)
            {
                this.Snake_array_2[0].X = 0;
				this.game_stop_2=1;
				this.PLAYER2_GAMEENDING_FLAG=1;
                
            }
		if(( this.Snake_array_2[0].Y+ this.Snake_size_2)>=l_canvas.height)
            {
                 this.Snake_array_2[0].Y = l_canvas.height - this.Snake_size_2;
				this.game_stop_2=1;
                this.PLAYER2_GAMEENDING_FLAG=1;
                
            }
        if( this.Temp_YPos_Array_2[0] <= 0)
            {
                 this.Snake_array_2[0].Y = 0;
				this.game_stop_2=1;
				this.PLAYER2_GAMEENDING_FLAG=1;
				
                
            }
        
	}
	
 
	
}