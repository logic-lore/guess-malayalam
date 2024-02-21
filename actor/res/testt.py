_x = """Machan Varghese
Dharmajan 
Tini Tom
Shivaji
Anoop Chandran
Abu Salim
Kalabhavan Haneef
Pradeep Kottayam
Vijayakumar
Idavela Babu
Babu Antony
P Ramu
Santhosh Keezhattoor
PP Subair
Shaju KS
Hareesh Kanaran
Santhosh
Jose
Chempil Ashokan
Karamana Janardanan
Dinesh Prabhakar
Geedha Salam
MS Thrippoonithura
P Sreekumar
Balaji Sharma
Riyaz Khan
Manikandan Pattambi
Jayan Cherthala
KTS Padannayil
Tony
Saju Kodiyan
Sudhi Kopa
Dileesh Pothen
Kollam Ajith
Majeed
Mahesh
Meghanadhan
Raveendran
Kamalahasan
Krishnankutty Nair
Silk Smitha
Prem Prakash
MR Gopakumar
Bhagath Manuel
Rajesh Sharma
Noby Marcose
Aliyar
Prasanth Alexander
Vinay Forrt
Kalabhavan Rahman
Vijay Menon
Biyon
Arun
Ramesh Pisharadi
Unni Mukundan
Manuraj
Sunny Wayne
VD Rajappan
Nasser
Sreenath Bhasi
Mukundan
Krishnaprasad
James Parackal
Jayaraj Warrier
Kalabhavan Navas
Vijayan Karanthoor
Saju Navodaya
SP Sreekumar
Ravi Vallathol
Baiju VK
Baiju Ezhupunna
Manikuttan
Vineeth Kumar
Subeesh Sudhi
Krishna
Niyaz Backer
Aneesh G Menon
Bala
Sharafudeen
Guiness Pakru
EA Rajendran
Sidharth Shiva
Narain
Kalabhavan Prajod
Vishnu Unnikrishnan
Dr Rony David
Rahul Madhav
N Jayakrishnan
Thalaivasal Vijay
Anju Aravind
Nirmal Palazhi
Sajitha Beti
Appa Haja
Biju Pappan
Kiran Raj
Kottayam Purushan
Sankranthi Naseer
Nelson
Ganapathi
Anil Nedumangadu
Vinod Kovoor
Harilal
Vijilesh Karayad
Yadu Krishnan
Aniyappan
Vinu Mohan
Sudev Nair
Azees Nedumangadu
Kottayam Ramesh
Boban Alummoodan
Sajan Palluruthi
Shiju
Babu Swami
Thampi Antony
Suresh Aristo"""

splited = _x.split("\n")

import random

def produce(i_value):
    _val = splited[random.randint(0, (len(splited))-1)]
    if _val == i_value:
        produce(i_value)
    else:
        return _val

for i in splited:
    print(f"""a++;
window["ans"+a] = "{i}"; //Answer
window["noans1"+a] = "{produce(i)}";
window["noans2"+a] = "{produce(i)}";
window["noans3"+a] = "{produce(i)}";
window["noans4"+a] = "{produce(i)}";
""")