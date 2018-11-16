# Passing data using services
 * In Service itself we should have  -> statusUpdated=new EventEmitter<string>();
 * where we want to send data we have -> this.accountService.statusUpdated.emit(status);
 * where we get data we have   -> this.accountService.statusUpdated.subscribe(
      (status: string) => alert("new status " + status)
    );
