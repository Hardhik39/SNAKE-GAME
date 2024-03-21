class c_box
            {
                constructor(l_x,l_y,l_size)
                    {
                        this.X=l_x;
                        this.Y=l_y;
                        this.size=l_size;
                        this.color="#" + Math.floor(Math.random() * 16777215).toString(16);
                        
                    }
                m_drawbox(l_context)
                {
                    l_context.fillStyle=this.color;
                    l_context.fillRect(this.X,this.Y,this.size,this.size);
					l_context.strokeRect(this.X,this.Y,this.size,this.size);
						
                	        
                }
			}