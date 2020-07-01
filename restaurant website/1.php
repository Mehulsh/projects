<?php
if(isset($_POST['submit'])){
    header('Location:index.php');
}
$user = 'food';
$pass = 'food';
$db = 'mehul';

$conn = new mysqli('localhost', $user, $pass, $db) or die("Connection failed: ");
include 'index.php';

mysqli_select_db($conn,$db);
$sql1="CREATE TABLE IF NOT EXISTS reserve(
res_no INT AUTO_INCREMENT PRIMARY KEY,
fname VARCHAR(20) NOT NULL,
lname VARCHAR(20) NOT NULL,
pnum VARCHAR(10) NOT NULL,
email VARCHAR(50),
seats INT NOT NULL,
date DATE NOT NULL)";

$result1= mysqli_query($conn,$sql1);

$f=$_POST['f_name'];
$l=$_POST['l_name'];
$p=$_POST['phone'];
$e=$_POST['email'];
$s=$_POST['seats'];
$d=$_POST['date'];
$sql2="INSERT INTO reserve(fname,lname,pnum,email,seats,date)
       VALUES('$f','$l','$p','$e',$s,'$d')";

$result2= mysqli_query($conn,$sql2);

mysqli_close($conn);


?>
