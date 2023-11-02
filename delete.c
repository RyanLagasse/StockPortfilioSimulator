 // TODO

    Program pgm = programs[cur];

    pid_t pid = fork();
    if(pid < 0)
        die("Forking Failed");
    
    else if(pid == 0) { 
        // Child Process
       
        if (pgm.fd_in != 0) {                                     // Set Input
            if(dup2(pgm.fd_in, 0) < 0)              
                die("Setting Input Failed");
        }
    
        if (pgm.fd_out != 1) {                                   // Set Output
            if(dup2(pgm.fd_out ,1) < 0) 
                die("Setting Output Failed");
        }
        
        // close all pipes
        for (int i = 3; i < 2*(num_programs)+3; i++) { 
            if (close(i) != 0)
                die("Closing child fd failed");
        }
        
        
        execvp(pgm.argv[0], &pgm.argv[0]);              //execute program
        
            
    }
    else {
        // Parent Process
        pgm.pid = pid;
        
        if (cur == num_programs - 1) {
            for (int i = 3; i<2*(num_programs)+3; i++) { 
            if (close(i) != 0)
                die("Closing child fd failed");
        }
        }
        
    }