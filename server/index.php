<?php
	include 'dbconf.php';
	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error) {
		$output = array('status'  => 0, 'message' => 'ai ai ai...');
		die(json_encode($output));
	}

	$request_body = file_get_contents('php://input');
	$data = json_decode($request_body);

	$action	= mysqli_real_escape_string($conn, $data->action);
	$email	= mysqli_real_escape_string($conn, $data->email);
	$phone	= mysqli_real_escape_string($conn, $data->phoneNumber);
	$name	= mysqli_real_escape_string($conn, $data->delivery);
	$terms	= mysqli_real_escape_string($conn, $data->acceptTerms);

	$output = array('status'  => 0, 'message' => 'nothing happened', 'action' => $data->action);

	if(false) { //antispam?
		$output = array('status'  => 0, 'message' => 'antispam');
		$conn->close();
		die(json_encode($output));
	}
	$existQuery  = "SELECT * FROM $tableName WHERE email='$email'";
	$existResult = $conn->query($existQuery);
	$exist  = $existResult->num_rows != 0;

	/*
	if($exist && $action == 'register') {
		$output = array('status'  => 0, 'error' => 1, 'message' => 'register');
	}
	*/

	if($exist && $action == 'like') {
		$updateQuery  = "UPDATE $tableName SET likes=2 WHERE email='$email'";
		$updateResult = $conn->query($updateQuery);
		$output = array('status'  => $updateResult ? 1 : 0, 'message' => 'like');
	}

	if(!$exist && $action == 'like') {
		$output = array('status'  => 0, 'message' => 'ai ai ai... like');
	}

	if($action == 'register') {
		$sql = "INSERT INTO $tableName (email, phone, post, likes) VALUES ('$email', '$phone', '$post', 1);";
		$success = $conn->query($sql);
		$output =array('status'  => $success ? 1 : 0, 'message' => 'register');
	}
	$conn->close();

	die(json_encode($output));
?>