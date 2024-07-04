(function () {
    var student1 = {
        firstName: 'John',
        lastName: 'Doe',
        age: 21,
        location: 'New York'
    };
    var student2 = {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 22,
        location: 'California'
    };
    var studentsList = [student1, student2];
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');
    var th4 = document.createElement('th');
    var th1Text = document.createTextNode('First Name');
    var th2Text = document.createTextNode('Last Name');
    var th3Text = document.createTextNode('Age');
    var th4Text = document.createTextNode('Location');
    th1.appendChild(th1Text);
    th2.appendChild(th2Text);
    th3.appendChild(th3Text);
    th4.appendChild(th4Text);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    thead.appendChild(tr);
    table.appendChild(thead);
    studentsList.forEach(function (student) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td1Text = document.createTextNode(student.firstName);
        var td2Text = document.createTextNode(student.lastName);
        var td3Text = document.createTextNode(student.age.toString());
        var td4Text = document.createTextNode(student.location);
        td1.appendChild(td1Text);
        td2.appendChild(td2Text);
        td3.appendChild(td3Text);
        td4.appendChild(td4Text);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
})();
