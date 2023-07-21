
void student::getdata()
{
cout<<"\nEnter student's roll number: ";
cin>>rollno;
cout<<"\n\nEnter student name: ";
cin.ignore();
cin.getline(name,50);
cout<<"\nAll marks should be out of 100";
cout<<"\nEnter marks in English: ";
cin>>eng_marks;
cout<<"\nEnter marks in Math:  ";
cin>>math_marks;
cout<<"\nEnter marks in Science:  ";
cin>>sci_marks;
cout<<"\nEnter marks in 2nd language:  ";
cin>>lang2_marks;
cout<<"\nEnter marks in Computer science:  ";
cin>>cs_marks;
calculate();
