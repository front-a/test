const autocompleteEvent = new Event('autocompleteEvent');

(() => {
  document.addEventListener('autocompleteEvent', () => {
    let source = [];
    $('#txtCompanySearch').autocomplete({
      classes: {
        'ui-autocomplete': 'custom-autocomplete custom-scroll',
      },
      source: function (request, response) {
        // const data = companiesMocks();
        $.ajax({
          url: '/property/List.aspx/' + getWebMethod(),
          data: `{ 'prefix': '${request.term}','acRoleID':'<%=roleID.ToString()%>'}`,
          dataType: 'json', type: 'POST',
          contentType: 'application/json; charset=utf-8',
          success: function (data) {

            response($.map(data.d, function (item) {
              source.push({
                label: item.split(':')[0],
                value: item.split(':')[1],
              });
              return {
                label: item.split(':')[0],
              }
            }));

          },
          //error: function (response) {alert(response.responseText);},
          failure: function (response) {
            alert(response.responseText);
          }
        });
      },
      select: function (e, i) {
        const {label} = i.item;
        const curr = source.find(elem => elem.label === label);
        $('#txtCompanySearch').attr('data-id', curr.value);
      },
      minLength: 0
    });

    $('#txtCompanySearch').focus(function () {
      $(this).autocomplete('search', '');   // Search for an empty string -> return all results
    });
  });
})();
