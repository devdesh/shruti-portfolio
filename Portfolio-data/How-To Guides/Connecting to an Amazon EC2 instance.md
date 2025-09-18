## Connecting to an Amazon EC2 instance

You connect to your Amazon EC2 instance via SSH. An SSH connection requires *port 22* to be open on your network. You may need to contact your network administrator to ensure *port 22* is open.

<br/>

## Prerequisites

* A laptop with internet connection
* A running Amazon EC2 instance in AWS cloud
* An open port 22 on your laptop

<br/>

## Steps

**For MAC/Linux users:**

1. Open the Terminal application.
2. Type the commands below. In both commands, replace *PATH-TO-PEM-FILE* with a reference to the .pem file that you downloaded while launching the instance. In the second command, replace *PUBLIC-IP* with the IPv4 Public IP of the instance.
  
```bash
chmod 400 PATH-TO-PEM-FILE
ssh -i PATH-TO-PEM-FILE ec2-user@PUBLIC-IP
```

3. You will see a prompt like the one below. Answer **yes** to the prompt.

`
The authenticity of host '54.201.7.240 (54.201.7.240)' can't be established. ECDSA key fingerprint is SHA256:TrCPkFBL0F+pTp3LH+UGFPhGjl7N4qaoLucu21RWsRM. Are you sure you want to continue connecting (yes/no)?
`

<br/>

**For Windows users:**


1. Install [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html).
2. To convert your private key (.pem file) using PuTTYgen, start **PuTTYgen**.
3. Under **Type of key to generate**, select **RSA**.
4. Click **Load**. By default, PuTTYgen displays only files with the extension .ppk. To locate your .pem file, select the option to display files of all types.
5. Select your **.pem file** for the key pair that you specified when you launched your instance, and then click **Open**. 
6. Click **OK** to dismiss the confirmation dialog box.
7. Click **Save** private key to save the key in the format that PuTTY can use. PuTTYgen displays a warning about saving the key without a passphrase. Click **Yes**.
8. Specify the same name for the key that you used for the key pair (for example, my-key-pair). PuTTY automatically adds the .ppk file extension.
9. Your private key is now in the correct format for use with PuTTY. You can now connect to your instance using PuTTY's SSH client.
10. Start **PuTTY**.   
11. In the **Category** pane, click **Session**.
12. In the **Host Name** text box, type **ec2-user@IP-ADDRESS**, where IP-ADDRESS is the public IP address of your Amazon EC2 instance.
13.  In the **Category** pane, expand **Connection**, expand **SSH**, and then click **Auth**.
14.  Click **Browse**.
15.  Select the **.ppk file** that you generated for your key pair, and then click **Open**.
16.  If you plan to start this session again later, you can save the session information for future use. In the **Category** tree, select **Session**, enter a name for the session in **Saved Sessions**, and then click **Save**.
17. Click **Open** to start the PuTTY session. PuTTY will ask whether you wish to cache the server’s host key. 
18. Click **Yes**.

**You are now connected to the Amazon EC2 instance.**

