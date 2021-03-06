define(function() {
  return function($timeout) {
    return function(scope, elem, attrs) {
      return scope.$watch(attrs.focusIf, function(newVal) {
        if (newVal) {
          $timeout(function() {
            return elem[0].focus();
          }, 0, false);
        }
      });
    };
  };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2hvYm9jaGlsZC9EZXNrdG9wL2Nsb25vc0Zyb250ZW5kL211c2ljLXBsYXllci13ZWItZnJvbnQtZW5kL3B1YmxpYy9zY3JpcHRzL2FwcC9kaXJlY3RpdmVzL2ZvY3VzSWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIvVXNlcnMvaG9ib2NoaWxkL0Rlc2t0b3AvY2xvbm9zRnJvbnRlbmQvbXVzaWMtcGxheWVyLXdlYi1mcm9udC1lbmQvc3JjL3NjcmlwdHMvYXBwL2RpcmVjdGl2ZXMvZm9jdXNJZi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBQSxDQUFPLFNBQUEsR0FBQTtTQUFHLFNBQUMsUUFBRCxHQUFBO1dBQ1QsU0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLEtBQWQsR0FBQTthQUNDLEtBQUssQ0FBQyxNQUFOLENBQWEsS0FBSyxDQUFDLE9BQW5CLEVBQTRCLFNBQUMsTUFBRCxHQUFBO0FBQzNCLFFBQUEsSUFBRyxNQUFIO0FBQ0MsVUFBQSxRQUFBLENBQVMsU0FBQSxHQUFBO21CQUNSLElBQUssQ0FBQSxDQUFBLENBQUUsQ0FBQyxLQUFSLENBQUEsRUFEUTtVQUFBLENBQVQsRUFFRSxDQUZGLEVBRUssS0FGTCxDQUFBLENBREQ7U0FEMkI7TUFBQSxDQUE1QixFQUREO0lBQUEsRUFEUztFQUFBLEVBQUg7QUFBQSxDQUFQLENBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSAtPiAoJHRpbWVvdXQpIC0+XG5cdChzY29wZSwgZWxlbSwgYXR0cnMpIC0+XG5cdFx0c2NvcGUuJHdhdGNoIGF0dHJzLmZvY3VzSWYsIChuZXdWYWwpIC0+XG5cdFx0XHRpZiBuZXdWYWxcblx0XHRcdFx0JHRpbWVvdXQgLT5cblx0XHRcdFx0XHRlbGVtWzBdLmZvY3VzKClcblx0XHRcdFx0LCAwLCBmYWxzZVxuXHRcdFx0cmV0dXJuXG4iXX0=
