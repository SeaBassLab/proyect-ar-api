<?php
set_exception_handler('exception_handler');

function exception_handler(Exception $e) 
{
	echo '{
		"status":"err",
		"message":"'.$e->getFile().':'.$e->getLine().'  ' . $e->getMessage().'",
	}';
}
?>