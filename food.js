class c_food
            {
                constructor()
                    {
						this.size=20;
                        this.food_X=Math.floor(Math.random() * 1450-this.size) + this.size;
                        this.food_Y=Math.floor(Math.random() * 850-this.size) + this.size;
                        
                        this.color="#f05346";
                        
                    }
                m_drawfood(l_context)
                {
                    l_context.fillStyle=this.color;
                    l_context.fillRect(this.food_X,this.food_Y,this.size,this.size);
					
						
                	        
                }
			}