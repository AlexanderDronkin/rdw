/*
* Файлы
*/
var img_shovel = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIwMkJERTQ3NTk3MDExRTY4MzE1RURGQjAzNTMyMUYwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIwMkJERTQ4NTk3MDExRTY4MzE1RURGQjAzNTMyMUYwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjAyQkRFNDU1OTcwMTFFNjgzMTVFREZCMDM1MzIxRjAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjAyQkRFNDY1OTcwMTFFNjgzMTVFREZCMDM1MzIxRjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4deeX1AAAHgklEQVR42rxY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";

/* 
* Виртуальная кошечка
*/
hydra = {
	
	complite : false,
	
	words : [ 'гражданство', 'рф', 'тел', 'пол', 'регистрация', 'снг', 'прописка', 'муж', 'жен', 'мужчины/женщины', 'женщина', 'женщины', 'возраст', 'студенты', 'студентов', 'молодой', 'рост', 'вес', 'внешность', 'украина', 'казахстан', 'армения', 'киргизия', 'снг', 'мужчины', 'мужчина', 'судимости', 'пенсионеров', 'студент', 'пенсионер', 'молодых', 'требования', 'обязанности', 'условия', 'проживание', 'телефон', 'телефону', 'телефоны', 'славянская', 'славянин', 'славянка', 'славяне', 'национальность', 'без лишнего веса', 'вахта', 'график ', '2/2', '5/2', '1/2', '1/3', '3/3', '30/15', '30/30', '60/30', 'сменный', 'частичная занятость', 'полная занятость', 'гибкий', 'выходного дня', 'плавающий', 'совмещение', 'удалённая работа', 'удаленная работа', 'личные качества', 'гражданин', 'граждане', 'укр', 'рб', 'молд', 'без говора', 'навыки', 'православный', 'православная', 'украины', 'молдовы', 'белоруссии', 'гражд', 'граждан', 'место жительства', 'женщин', 'мужчин', 'доб.', 'добавочный', 'пенсионеры', 'россиянин', 'проживающий', 'проживающая', 'отсутствие лишнего веса', 'права', 'прав', 'правами', 'категории', 'категория', 'водительское удостоверение', 'водительского удостоверения', 'водительским удостоверением', 'водительские', 'водительское', 'в\/у', 'кат', 'вод', 'россиянка', 'россияне' ],
    
    w_list1 : [ 'требования к соискателю', 'основные требования', 'обязанности соискателя', 'должностные обязанности', 'условия', 'в обязанности входит', 'всему обучает заботливый бригадир', 'навыки', 'личные качества', 'требование', 'требования ', 'обязанности' ],
	w_list2 : [ 'условия', 'мы предлагаем', 'прямой работодатель', 'возможность выбора одного из нескольких объектов работы', 'большой выбор вакансий в одном офисе' ],
	w_list3 : [ 'график работы', 'график', 'гр.раб' ],

	exclude : [ 'карьерный рост', 'тк рф', 'тк. рф' ],
	
	// подсветить слова
	highlight : function () {
		
		var desc = ( $('*[name="major_sub_array[15][0]"]').length > 0 )? $('*[name="major_sub_array[15][0]"]').val() : '';
		var text_search = text = desc;
		
		for ( var i in this.exclude ) {
			var reg = new RegExp( this.exclude[i]+'[ \.\:\,\n]+', 'ig' );
			text_search = text_search.replace( reg, '');
			
			var reg = new RegExp( this.exclude[i]+'$', 'ig' );
			text_search = text_search.replace( reg, '');
		}
		
		for ( var i in this.words ) {
			
			var found = [];
			var reg = new RegExp( this.words[i]+'[ \.\:\,\n]+', 'ig' );
			found = found.concat( text_search.match( reg ) );
	
			reg = new RegExp( this.words[i]+'$', 'ig' );
			found = found.concat( text_search.match( reg ) );
	
			if ( found != null )
				for ( var e = 0; e < found.length; e++ ) {
					reg = new RegExp( found[e], 'ig' );
					text = text.replace( reg, '<span style="color: #FF00FF"><b>'+found[e]+'</b></span>' );
				}
				
				
		}
		
		var text = text.replace( /\n/g, '<br>' );
		$('*[name="major_sub_array[15][0]"]').parent().html( text + '<textarea name="major_sub_array[15][0]" style="display: block; width: 100%; height: 140px; margin: 10px 0px;">'+desc+'</textarea>');
		setTimeout( "$('textarea[name=\"major_sub_array[15][0]\"]').stop().animate( { height : $('textarea[name=\"major_sub_array[15][0]\"]')[0].scrollHeight } );", 100 );
		
	},
	
	// теги опыта работы
	exp_tags : function () {
		
		if (  
			$('input[name="tag_level[16212]"]').length > 0 && (
				$('input[name="tag_level[5269]"]').length > 0 ||
				$('input[name="tag_level[5273]"]').length > 0 ||
				$('input[name="tag_level[5294]"]').length > 0 ||
				$('input[name="tag_level[5297]"]').length > 0 ||
				$('input[name="tag_level[5299]"]').length > 0
			)
		 ){
			
			var exp_tag_ul = $('input[name="tag_level[16212]"]').parent().parent();
			
			$('input[name="tag_level[5269]"]').parent().remove();
			$('input[name="tag_level[5273]"]').parent().remove();
			$('input[name="tag_level[5294]"]').parent().remove();
			$('input[name="tag_level[5297]"]').parent().remove();
			$('input[name="tag_level[5299]"]').parent().remove();
			$('input[name="tag_level[16212]"]').parent().remove();
			
			exp_tag_ul.prepend( '<li class="hLevel1" style="color: #ff00ff;">Любой<input type="hidden" name="drowing_array_data[12][]" value="16212"><input type="hidden" name="major_sub_array[12][16212]" value="Любой"><input type="hidden" name="tag_level[16212]" value="1"></li>' );
			
			
		}

		if (  
			$('input[name="tag_level[5299]"]').length > 0 &&
			$('input[name="tag_level[16212]"]').length == 0 && (
				$('input[name="tag_level[5269]"]').length > 0 ||
				$('input[name="tag_level[5273]"]').length > 0 ||
				$('input[name="tag_level[5294]"]').length > 0 ||
				$('input[name="tag_level[5297]"]').length > 0
			)
		 ){
			
			var exp_tag_ul = $('input[name="tag_level[5299]"]').parent().parent();
			
			$('input[name="tag_level[5269]"]').parent().remove();
			$('input[name="tag_level[5273]"]').parent().remove();
			$('input[name="tag_level[5294]"]').parent().remove();
			$('input[name="tag_level[5297]"]').parent().remove();
			$('input[name="tag_level[5299]"]').parent().remove();
			
			exp_tag_ul.prepend( '<li class="hLevel1" style="color: #ff00ff;">Без опыта<input type="hidden" name="drowing_array_data[12][]" value="5299"><input type="hidden" name="major_sub_array[12][5299]" value="Без опыта"><input type="hidden" name="tag_level[5299]" value="1"></li>' );
			
			
		}
		 
		if (  
			$('input[name="tag_level[5299]"]').length == 0 &&
			$('input[name="tag_level[16212]"]').length == 0 
		 ) {
			
			if ( $('input[name="tag_level[5269]"]').length > 0 ) {
				$('input[name="tag_level[5273]"]').parent().remove();
				$('input[name="tag_level[5294]"]').parent().remove();
				$('input[name="tag_level[5297]"]').parent().remove();
				
				$('input[name="tag_level[5269]"]').parent().css( 'color', '#ff00ff' );
			}
			
			if ( $('input[name="tag_level[5273]"]').length > 0 ) {
				$('input[name="tag_level[5294]"]').parent().remove();
				$('input[name="tag_level[5297]"]').parent().remove();
				
				$('input[name="tag_level[5273]"]').parent().css( 'color', '#ff00ff' );
			}
			
			if ( $('input[name="tag_level[5294]"]').length > 0 ) {
				$('input[name="tag_level[5297]"]').parent().remove();
				
				$('input[name="tag_level[5294]"]').parent().css( 'color', '#ff00ff' );
			}
			 
		 }
		 
		 if ( $('*[name="major_sub_array[12][0]"]').length > 0 ) {
			var desc_br = $('*[name="major_sub_array[12][0]"]').parent().text().replace( /^\n/, '' );
			desc_br = desc_br.replace( /\n/g, '<br>' );
				
			var desc = $('*[name="major_sub_array[12][0]"]').val();
			desc = desc.replace( /&amp;#9642;[\s]?/gi, '' );
			desc = desc.replace( /&#9642;[\s]?/gi, '' );
			desc = desc.replace( /\n[\s]?-[\s]?/gi, "\n" );
			desc = desc.replace( /^[\s]?-[\s]?/gi, "" );
			
			$('*[name="major_sub_array[12][0]"]').parent().html( desc_br + '<textarea name="major_sub_array[12][0]" style="display: block; width: 100%; height: 140px; margin: 10px 0px;">'+desc+'</textarea>');
		} else {
			$('.major_id_class_label_12').parent().parent().find('dd ul').append( '<textarea name="major_sub_array[12][0]" style="display: block; width: 100%; height: 140px; margin: 10px 0px;"></textarea>' );
		}
		setTimeout( "$('textarea[name=\"major_sub_array[12][0]\"]').stop().animate( { height : $('textarea[name=\"major_sub_array[12][0]\"]')[0].scrollHeight } );", 100 );
		
		// фикс для попапа на редактирования условий
		$('.major_id_class_label_12').click( function(){
			if ( $('*[name="major_sub_array[12][0]"]').length > 0 )
				setTimeout( "$('#minor_window_default textarea').val( $('*[name=\"major_sub_array[12][0]\"]').val() )", 500 );
		} );
		
		// пакет ваканский опыт это плюс
		if ( 
			( $('input[name="tag_level[5269]"]').length > 0 ||
			$('input[name="tag_level[5273]"]').length > 0 ||
			$('input[name="tag_level[5294]"]').length > 0 ||
			$('input[name="tag_level[5297]"]').length > 0 ) &&
			$('input[name="tag_level[5299]"]').length == 0 &&
			$('input[name="tag_level[16212]"]').length == 0 &&
			$('input[name="tag_level[6672]"]').length == 0
		) {
			$('.major_id_class_label_6576').parent().parent().find('dd ul').append( '<li class="hLevel1" style="color: #ff00ff">Опыт — это плюс<input type="hidden" name="drowing_array_data[6576][6672]" value="6672"><input type="hidden" name="major_sub_array[6576][6672]" value="Опыт — это плюс"><input type="hidden" name="tag_level[6672]" value="1"></li>' );
		}
		
		if ( ( $('input[name="tag_level[16212]"]').length > 0 || $('input[name="tag_level[5299]"]').length > 0 ) && $('input[name="tag_level[6672]"]').length > 0 ) {
			$('input[name="tag_level[6672]"]').parent().remove();
		}
		
	},
	
	// образование
	edu_tags : function () {
		
		if ( 
			$('input[name="tag_level[5268]"]').length > 0 &&
			$('input[name="tag_level[5281]"]').length > 0 &&
			$('input[name="tag_level[5338]"]').length > 0 &&
			$('input[name="tag_level[5284]"]').length > 0
		) {
			
			$('input[name="tag_level[5268]"]').parent().remove();
			$('input[name="tag_level[5281]"]').parent().remove();
			$('input[name="tag_level[5338]"]').parent().remove();
			$('input[name="tag_level[5284]"]').parent().remove();
			
			var edu_tag_ul = $('input[name="tag_level[5268]"]').parent().parent();
			
			if ( $('input[name="tag_level[11152]"]').length == 0 )
				edu_tag_ul.prepend( '<li class="hLevel1" style="color: #ff00ff;">Любое<input type="hidden" name="drowing_array_data[11][11152]" value="11152"><input type="hidden" name="major_sub_array[11][11152]" value="Любое"><input type="hidden" name="tag_level[11152]" value="1"></li>' );
			else 
				$('input[name="tag_level[11152]"]').parent().css( 'color', '#ff00ff' );
			
		} 
		 
		 if ( $('*[name="major_sub_array[11][0]"]').length > 0 ) {
			var desc_br = $('*[name="major_sub_array[11][0]"]').parent().text().replace( /^\n/, '' );
			desc_br = desc_br.replace( /\n/g, '<br>' );	
				
			var desc = $('*[name="major_sub_array[11][0]"]').val();
			desc = desc.replace( /’[\s]?/gi, '' );
			desc = desc.replace( /&amp;#9642;[\s]?/gi, '' );
			desc = desc.replace( /&#9642;[\s]?/gi, '' );
			desc = desc.replace( /\n[\s]?-[\s]?/gi, "\n" );
			desc = desc.replace( /^[\s]?-[\s]?/gi, "" );
			
			if ( desc.match(/любое/i) || desc.match(/не имеет значения/i) ) {
				
				desc = desc.replace( /любое/i, '' ); 
				desc = desc.replace( /не имеет значения/i, '' ); 
				
				if ( $('input[name="tag_level[11152]"]').length == 0 )
					$('*[name="major_sub_array[11][0]"]').parent().parent().prepend( '<li class="hLevel1" style="color: #ff00ff;">Любое<input type="hidden" name="drowing_array_data[11][11152]" value="11152"><input type="hidden" name="major_sub_array[11][11152]" value="Любое"><input type="hidden" name="tag_level[11152]" value="1"></li>' );
				
			}
			
			$('*[name="major_sub_array[11][0]"]').parent().html( desc_br + '<textarea name="major_sub_array[11][0]" style="display: block; width: 100%; height: 140px; margin: 10px 0px;">'+desc+'</textarea>');
		} else {
			$('.major_id_class_label_11').parent().parent().find('dd ul').append( '<textarea name="major_sub_array[11][0]" style="display: block; width: 100%; height: 140px; margin: 10px 0px;"></textarea>' );
		}
		setTimeout( "$('textarea[name=\"major_sub_array[11][0]\"]').stop().animate( { height : $('textarea[name=\"major_sub_array[11][0]\"]')[0].scrollHeight } );", 100 );
		
		// фикс для попапа на редактирования условий
		$('.major_id_class_label_11').click( function(){
			if ( $('*[name="major_sub_array[11][0]"]').length > 0 )
				setTimeout( "$('#minor_window_default textarea').val( $('*[name=\"major_sub_array[11][0]\"]').val() )", 500 );
		} );
		
	},
	
	// добавить телефон
	add_telephone : function ( telephone ) {

		// проверить есть ли телефон
		for ( var e = 0; e < $('input[name="vacancy_contacts_phone[]"]').length; e++ ) 
			if ( $('input[name="vacancy_contacts_phone[]"]')[e].value == telephone ) 
				return false;
			
		// если нет и количество не больше 5 то добавить
		if ( $('input[name="vacancy_contacts_phone[]"]').eq(0).val() == '' ) {
			$('input[name="vacancy_contacts_phone[]"]').eq(0).val( telephone );
		} else if ( $('input[name="vacancy_contacts_phone[]"]').length < 6 ) {
			add_contact_div();
			$('input[name="vacancy_contacts_phone[]"]:eq('+($('input[name="vacancy_contacts_phone[]"]').length-2)+')').val( telephone );
		}
				
	},
	
	// редактирование объявления
	editing : function () {
		
		if ( this.complite )
			return;
		else
			this.complite = true;
	
		$('#vk_groups').parent().parent().hide();
		$('.major_id_class_label_15').parent().parent().css( { 'background': '#ececec', 'padding': '20px 20px 20px 20px',  'border-radius': '10px', 'margin-bottom': '20px' } );
		
		
		this.exp_tags();
		this.edu_tags();
		
		var desc = ( $('*[name="major_sub_array[15][0]"]').length > 0 )? $('*[name="major_sub_array[15][0]"]').val() : '';
		var desc_old = desc;
		
		// правим зп
		var smin = $('#salary_min').val();
		if ( smin > 0 && smin < 10 ) {
			$('#salary_min').val( '' );
			$('#salary_min').parent().append( '<div>старое значение: '+smin+'</div>' );
		} else if ( smin > 9 && smin < 100 ) {
			$('#salary_min').val( smin*1000 );
			$('#salary_min').parent().append( '<div>старое значение: '+smin+'</div>' );
		} else if ( smin > 99 && smin < 3999 ) {
			$('#salary_min').val( '' );
			$('#salary_min').parent().append( '<div>старое значение: '+smin+'</div>' );
		}
		
		var smax = $('#salary_max').val();
		if ( smax > 0 && smax < 10 ) {
			$('#salary_max').val( '' );
			$('#salary_max').parent().append( '<div>старое значение: '+smax+'</div>' );
		} else if ( smax > 9 && smax < 100 ) {
			$('#salary_max').val( smax*1000 );
			$('#salary_max').parent().append( '<div>старое значение: '+smax+'</div>' );
		} else if ( smax > 99 && smax < 3999 ) {
			$('#salary_max').val( '' );
			$('#salary_max').parent().append( '<div>старое значение: '+smax+'</div>' );
		}
				
		// удаляем добавление синонимов
		$('.add_synonym').css( { position: 'absolute', top: '-10000px'} );
			
		// маски 
		var req_telephone = /((8|\+7)[-\s]?)?\(?\d{3,5}\)?[-\s]?\d{1}[-\s]?\d{1}[-\s]?\d{1}[-\s]?\d{1}[-\s]?\d{1}(([-\s]?\d{1})?[-\s]?\d{1})?[,\s\n]?/ig;
		var req_email = /([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})[,\s\n]?/ig;
		var reg_site = /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?[,\s\n]?/ig;
		
		// поле контактное лицо
		var contact = $('#contact_name').val().match( req_telephone );
		if ( contact != null )
			for ( var i = 0; i < contact.length; i++ ) {
				var telephone = contact[i];
				$('#contact_name').val( $('#contact_name').val().replace( telephone, '' ) );
				telephone = telephone.replace( /[^\d]/gi, '');
				if ( telephone.length == 11 && ( telephone[0] == 7 || telephone[0] == 8 ) )
					telephone = telephone.substr( 1 );
				
				this.add_telephone( telephone );
				
			}
			
		// поле комментариев
		var comment = $('textarea[name="vacancy_contacts_text[]"]').val().match( req_telephone );
		if ( comment != null )
			for ( var i = 0; i < comment.length; i++ ) {
				var telephone = comment[i];
				$('textarea[name="vacancy_contacts_text[]"]').val( $('textarea[name="vacancy_contacts_text[]"]').val().replace( telephone, '' ) );
				telephone = telephone.replace( /[^\d]/gi, '');
				if ( telephone.length == 11 && ( telephone[0] == 7 || telephone[0] == 8 ) )
					telephone = telephone.substr( 1 );
				
				this.add_telephone( telephone );
				
			}
			
		var comments = [];
		
		// поле email		
		var e_mails = $('#contact_email').val().match( req_email );
		var main_email = false;
		var old_contact_email = $('#contact_email').val();
		if ( e_mails != null )
			for ( var i = 0; i < e_mails.length; i++ ) {
				var email = e_mails[i];
				$('#contact_email').val( $('#contact_email').val().replace( email, '' ) );
				email = email.replace( /[\s,]/gi, '' );
				email = email.replace( /\.$/, '' );
				email = email.replace( /^\./, '' );
				if ( !main_email ) 
					main_email = email
				else 
					comments.push( email );
			}
			
		var esites = $('#contact_email').val().match( reg_site );
		if ( esites != null )
			for ( var i = 0; i < esites.length; i++ ) {
				var site = esites[i];
				$('#contact_email').val( $('#contact_email').val().replace( site, '' ) );
				site = site.replace( /[\s,]/gi, '' );
				site = site.replace( /\.$/, '' );
				site = site.replace( /^\./, '' );
				if ( site != '' )
					comments.push( site );
			}
			
		$('#contact_email').val( ( main_email ) ? main_email : '' );
		
		if ( old_contact_email != $('#contact_email').val() )
			$('#contact_email').parent().append( '<div>старое значение:<br>'+old_contact_email+'</div>' );
		
		// обработка найденных емейлов
		var emails = desc.match( req_email );
		if ( emails != null )
			for ( var i = 0; i < emails.length; i++ ) {
				var email = emails[i];
				desc = desc.replace( email, '' );
				email = email.replace( /[\s,]/gi, '' );
				email = email.replace( /\.$/, '' );
				email = email.replace( /^\./, '' );
				if ( email != '' ) 
					if ( $('#contact_email').val() == '' )
						$('#contact_email').val( email );
					else 
						comments.push( email );
			}
			
		
		// обработка найденных сайтов
		var sites = desc.match( reg_site );
		if ( sites != null )
			for ( var i = 0; i < sites.length; i++ ) {
				var site = sites[i];
				desc = desc.replace( site, '' );
				site = site.replace( /[\s,]/gi, '' );
				site = site.replace( /\.$/, '' );
				site = site.replace( /^\./, '' );
				if ( site != '' )
					comments.push( site );
			}
			
		// дописываем емейлы и сайты в поле комментарий
		$('textarea[name="vacancy_contacts_text[]"]:first').val( $('textarea[name="vacancy_contacts_text[]"]:first').val() + comments.join( "\n" ) );
	
		// обработка найденных телефонов
		var telephones = desc.match( req_telephone );
		if ( telephones != null )
			for ( var i = 0; i < telephones.length; i++ ) {
				
				// привести телефон к формату 10 цифр без +7 и 8
				var telephone = telephones[i];
				desc = desc.replace( telephone, '' );
				telephone = telephone.replace( /[^\d]/gi, '');
				if ( telephone.length == 11 && ( telephone[0] == 7 || telephone[0] == 8 ) )
					telephone = telephone.substr( 1 );
				 
				this.add_telephone( telephone );
				
			}
		
		// выводим требования для редактирования
		desc = desc.replace( /\s([,\.]\s)/ig, "$1" );
		desc = desc.replace( /!/g, '' );
		desc = desc.replace( /•/g, '' ); 
		desc = desc.replace( /,\./g, '.' );
		desc = desc.replace( /\.,/g, '.' );
		desc = desc.replace( /\.{2}/g, '' );
		desc = desc.replace( /,{2}/g, '' );

		desc = desc.replace( /&amp;#9642;[\s]?/gi, '' );
		desc = desc.replace( /&#9642;[\s]?/gi, '' );
		
		desc = desc.replace( /\n[\s]?[-–][\s]?/gi, "\n" );
		desc = desc.replace( /^[\s]?[-–][\s]?/gi, "" );
		
		for ( let i of this.w_list1 ) {
			let expression = new RegExp( '('+i+':?)', 'gi' );

			desc = desc.replace( expression, '' ); 
			desc_old = desc_old.replace( expression, '<span style="color: #00f137"><b>$1</b></span>' ); 
		}

		desc = desc.replace( /[ ]{2,}/g, ' ' ); 
		desc = desc.replace( /[\n]{2,}/g, "\n" ); 
		desc = desc.replace( /\*/gi, '' ); 
		desc_old = desc_old.replace( /\*/gi, '<span style="color: #00f137"><b>*</b></span>' ); 
		desc = desc.replace( /&quot;/gi, '' ); 
		desc_old = desc_old.replace( /\&quot;/gi, '<span style="color: #00f137"><b>&quot;</b></span>' ); 
		desc = desc.replace( /&#34;/gi, '' ); 
		desc_old = desc_old.replace( /\&#34;/gi, '<span style="color: #00f137"><b>&#34;</b></span>' ); 
		desc = desc.replace( /[\"]/ig, '' );
		
		
		if ( desc != desc_old.trim() ) {
		
			// старая версия
			var desc_old_br = desc_old.replace( /\n/g, '<br>' );
			$('*[name="major_sub_array[15][0]"]').parent().parent().append( '<li class="hLevel1 nobullet"><b>Старая версия требований:</b><div style="color: #999">'+desc_old_br+'</div></li>' );
			
			// заменяем значение в поле требований
			var desc_br = desc.replace( /\n/g, '<br>' );
			$('*[name="major_sub_array[15][0]"]').parent().html( desc_br + '<textarea name="major_sub_array[15][0]">'+desc+'</textarea>');
			
			// фикс для попапа на редактирования описания, если значение было изменено программно
			$('.major_id_class_label_15').click( function(){
				if ( $('*[name="major_sub_array[15][0]"]').length > 0 )
					setTimeout( "$('#minor_window_default textarea').val( $('*[name=\"major_sub_array[15][0]\"]').val() )", 500 );
			} );
	
		}

		// выводим регионы для редактирования
		if ( $('*[name="major_sub_array[8][0]"]').length > 0 ) {
			var desc_br = $('*[name="major_sub_array[8][0]"]').parent().text().replace( /^\n/, '' );
			var desc = $('*[name="major_sub_array[8][0]"]').val();

			desc = desc.replace( /!/g, '' ); 
			desc = desc.replace( /•/g, '' ); 
			desc = desc.replace( /&amp;#9642;[\s]?/gi, '' );
			desc = desc.replace( /&#9642;[\s]?/gi, '' );
			desc = desc.replace( /\n[\s]?[-–][\s]?/gi, "\n" );
			desc = desc.replace( /^[\s]?[-–][\s]?/gi, "" );

			desc = desc.replace( /[ ]{2,}/g, ' ' ); 
			desc = desc.replace( /[\n]{2,}/g, "\n" ); 
			desc = desc.replace( /\*/gi, '' ); 
			desc_br = desc_br.replace( /\*/gi, '<span style="color: #00f137"><b>*</b></span>' ); 
			desc = desc.replace( /&quot;/gi, '' ); 
			desc_br = desc_br.replace( /\&quot;/gi, '<span style="color: #00f137"><b>&quot;</b></span>' ); 
			desc = desc.replace( /&#34;/gi, '' ); 
			desc_br = desc_br.replace( /\&#34;/gi, '<span style="color: #00f137"><b>&#34;</b></span>' ); 
			desc = desc.replace( /[\"]/ig, '' );

			desc = desc.replace( /^м[\n\s]Москва/i, '' ); 
			desc_br = desc_br.replace( /^([\s]*?м[\n\s]*?Москва)/i, '<span style="color: #00f137"><b>$1</b></span>' ); 

			desc_br = desc_br.replace( /\n/g, '<br>' );	
			
			$('*[name="major_sub_array[8][0]"]').parent().html( desc_br + '<textarea name="major_sub_array[8][0]" style="display: block; width: 100%; height: 60px; margin: 10px 0px;">'+desc+'</textarea>');
		} else {
			$('.major_id_class_label_8').parent().parent().find('dd ul').append( '<textarea name="major_sub_array[8][0]" style="display: block; width: 100%; height: 60px; margin: 10px 0px;"></textarea>' );
		}
		setTimeout( "$('textarea[name=\"major_sub_array[8][0]\"]').stop().animate( { height : $('textarea[name=\"major_sub_array[8][0]\"]')[0].scrollHeight } );", 100 );
		
		// фикс для попапа на редактирования региона
		$('.major_id_class_label_8').click( function(){
			if ( $('*[name="major_sub_array[8][0]"]').length > 0 ) 
				setTimeout( "$('#minor_window_treeAdvanced textarea').val( $('*[name=\"major_sub_array[8][0]\"]').val() )", 500 );
		} );
		
		// выводим условия для редактирования
		if ( $('*[name="major_sub_array[20][0]"]').length > 0 ) {
			var desc_br = $('*[name="major_sub_array[20][0]"]').parent().text().replace( /^\n/, '' );
			var desc = $('*[name="major_sub_array[20][0]"]').val();

			desc = desc.replace( /!/g, '' ); 
			desc = desc.replace( /•/g, '' ); 
			desc = desc.replace( /&amp;#9642;[\s]?/gi, '' );
			desc = desc.replace( /&#9642;[\s]?/gi, '' );
			desc = desc.replace( /\n[\s]?[-–][\s]?/gi, "\n" );
			desc = desc.replace( /^[\s]?[-–][\s]?/gi, "" );
			

			for ( let i of this.w_list2 ) {
				let expression = new RegExp( '('+i+':?)', 'gi' );

				desc = desc.replace( expression, '' ); 
				desc_br = desc_br.replace( expression, '<span style="color: #00f137"><b>$1</b></span>' ); 
			}

			desc = desc.replace( /[ ]{2,}/g, ' ' ); 
			desc = desc.replace( /[\n]{2,}/g, "\n" ); 
			desc = desc.replace( /\*/gi, '' ); 
			desc_br = desc_br.replace( /\*/gi, '<span style="color: #00f137"><b>*</b></span>' ); 
			desc = desc.replace( /&quot;/gi, '' ); 
			desc_br = desc_br.replace( /\&quot;/gi, '<span style="color: #00f137"><b>&quot;</b></span>' ); 
			desc = desc.replace( /&#34;/gi, '' ); 
			desc_br = desc_br.replace( /\&#34;/gi, '<span style="color: #00f137"><b>&#34;</b></span>' ); 
			desc = desc.replace( /[\"]/ig, '' );

			desc_br = desc_br.replace( /\n/g, '<br>' );	

			$('*[name="major_sub_array[20][0]"]').parent().html( desc_br + '<textarea name="major_sub_array[20][0]" style="display: block; width: 100%; height: 140px; margin: 10px 0px;">'+desc+'</textarea>');
		} else {
			$('.major_id_class_label_20').parent().parent().find('dd ul').append( '<textarea name="major_sub_array[20][0]" style="display: block; width: 100%; height: 140px; margin: 10px 0px;"></textarea>' );
		}
		setTimeout( "$('textarea[name=\"major_sub_array[20][0]\"]').stop().animate( { height : $('textarea[name=\"major_sub_array[20][0]\"]')[0].scrollHeight } );", 100 );
		
		// фикс для попапа на редактирования условий
		$('.major_id_class_label_20').click( function(){
			if ( $('*[name="major_sub_array[20][0]"]').length > 0 )
				setTimeout( "$('#minor_window_default textarea').val( $('*[name=\"major_sub_array[20][0]\"]').val() )", 500 );
		} );
		
		// выводим график работы для редактирования
		if ( $('*[name="major_sub_array[6][0]"]').length > 0 ) {
			var desc_br = $('*[name="major_sub_array[6][0]"]').parent().text().replace( /^\n/, '' );
			var desc = $('*[name="major_sub_array[6][0]"]').val();
			

			for ( let i of this.w_list3 ) {
				let expression = new RegExp( '('+i+':?)', 'gi' );

				desc = desc.replace( expression, '' ); 
				desc_br = desc_br.replace( expression, '<span style="color: #00f137"><b>$1</b></span>' ); 
			}

			desc = desc.replace( /[ ]{2,}/g, ' ' ); 
			desc = desc.replace( /[\n]{2,}/g, "\n" ); 
			desc = desc.replace( /\*/gi, '' ); 
			desc_br = desc_br.replace( /\*/gi, '<span style="color: #00f137"><b>*</b></span>' ); 
			desc = desc.replace( /&quot;/gi, '' ); 
			desc_br = desc_br.replace( /\&quot;/gi, '<span style="color: #00f137"><b>&quot;</b></span>' ); 
			desc = desc.replace( /&#34;/gi, '' ); 
			desc_br = desc_br.replace( /\&#34;/gi, '<span style="color: #00f137"><b>&#34;</b></span>' ); 
			desc = desc.replace( /[\"]/ig, '' );

			desc_br = desc_br.replace( /\n/g, '<br>' );	

			if ( desc.match(/полная/i) || desc.match(/полный день/i) || desc.match(/полная занятость/i) ) {
				
				desc = desc.replace( /полная занятость/i, '' ); 
				desc = desc.replace( /полная/i, '' ); 
				desc = desc.replace( /полный день/i, '' ); 
				
				if ( $('input[name="tag_level[5267]"]').length == 0 )
					$('*[name="major_sub_array[6][0]"]').parent().parent().prepend( '<li class="hLevel1" style="color: #ff00ff;">Полный день<input type="hidden" name="drowing_array_data[6][5267]" value="5267"><input type="hidden" name="major_sub_array[6][5267]" value="Полный день"><input type="hidden" name="tag_level[5267]" value="1"></li>' );
				
			}
			
			$('*[name="major_sub_array[6][0]"]').parent().html( desc_br + '<textarea name="major_sub_array[6][0]" style="display: block; width: 100%; height: 140px; margin: 10px 0px;">'+desc+'</textarea>');
		} else {
			$('.major_id_class_label_6').parent().parent().find('dd ul').append( '<textarea name="major_sub_array[6][0]" style="display: block; width: 100%; height: 140px; margin: 10px 0px;"></textarea>' );
		}
		setTimeout( "$('textarea[name=\"major_sub_array[6][0]\"]').stop().animate( { height : $('textarea[name=\"major_sub_array[6][0]\"]')[0].scrollHeight } );", 100 );
		
		// фикс для попапа на редактирования графика
		$('.major_id_class_label_6').click( function(){
			if ( $('*[name="major_sub_array[6][0]"]').length > 0 )
				setTimeout( "$('#minor_window_default textarea').val( $('*[name=\"major_sub_array[6][0]\"]').val() )", 500 );
		} );
		
		// выводим должность для редактирования
		if ( $('*[name="major_sub_array[2][0]"]').length > 0 ) {
			var desc_br = $('*[name="major_sub_array[2][0]"]').parent().text().replace( /^\n/, '' );
			var desc = $('*[name="major_sub_array[2][0]"]').val();

			desc = desc.replace( /[ ]{2,}/g, ' ' ); 
			desc = desc.replace( /[\n]{2,}/g, "\n" ); 
			desc = desc.replace( /\*/gi, '' ); 
			desc_br = desc_br.replace( /\*/gi, '<span style="color: #00f137"><b>*</b></span>' ); 
			desc = desc.replace( /&quot;/gi, '' ); 
			desc_br = desc_br.replace( /\&quot;/gi, '<span style="color: #00f137"><b>&quot;</b></span>' ); 
			desc = desc.replace( /&#34;/gi, '' ); 
			desc_br = desc_br.replace( /\&#34;/gi, '<span style="color: #00f137"><b>&#34;</b></span>' ); 
			desc = desc.replace( /[\"]/ig, '' );

			desc_br = desc_br.replace( /\n/g, '<br>' );	
	
						
			$('*[name="major_sub_array[2][0]"]').parent().html( '<textarea name="major_sub_array[2][0]" style="display: block; width: 100%; height: 140px; margin: 10px 0px;">'+desc+'</textarea>');
		}
		
		// фикс для попапа на редактирования должности
		$('.major_id_class_label_2').click( function(){
			if ( $('*[name="major_sub_array[2][0]"]').length > 0 )
				setTimeout( "$('#minor_window_default textarea').val( $('*[name=\"major_sub_array[2][0]\"]').val() )", 500 );
		} );
		
		
		// выводим водительские права для редактирования
		if ( $('*[name="major_sub_array[21][0]"]').length > 0 ) {
			var desc_br = $('*[name="major_sub_array[21][0]"]').parent().text().replace( /^\n/, '' );
			var desc = $('*[name="major_sub_array[21][0]"]').val();
			
			desc = desc.replace( /[ ]{2,}/g, ' ' ); 
			desc = desc.replace( /[\n]{2,}/g, "\n" ); 
			desc = desc.replace( /\*/gi, '' ); 
			desc_br = desc_br.replace( /\*/gi, '<span style="color: #00f137"><b>*</b></span>' ); 
			desc = desc.replace( /&quot;/gi, '' ); 
			desc_br = desc_br.replace( /\&quot;/gi, '<span style="color: #00f137"><b>&quot;</b></span>' ); 
			desc = desc.replace( /&#34;/gi, '' ); 
			desc_br = desc_br.replace( /\&#34;/gi, '<span style="color: #00f137"><b>&#34;</b></span>' ); 
			desc = desc.replace( /[\"]/ig, '' );
			
			desc_br = desc_br.replace( /\n/g, '<br>' );

			$('*[name="major_sub_array[21][0]"]').parent().html( '<textarea name="major_sub_array[21][0]" style="display: block; width: 100%; height: 140px; margin: 10px 0px;">'+desc+'</textarea>');
		} else {
			$('.major_id_class_label_21').parent().parent().find('dd ul').append( '<textarea name="major_sub_array[21][0]" style="display: block; width: 100%; height: 140px; margin: 10px 0px;"></textarea>' );
		}
		
		// фикс для попапа на редактирования водительских прав
		$('.major_id_class_label_21').click( function(){
			if ( $('*[name="major_sub_array[21][0]"]').length > 0 )
				setTimeout( "$('#minor_window_default textarea').val( $('*[name=\"major_sub_array[21][0]\"]').val() )", 500 );
		} );
		
		
		this.highlight();
		
	}
	
};	

/*
* Интерфейс
*/
var visual = {
	
	make_gold_shovel : function () {
		
		$('th.col-moderate').html( '<a id=\"gold_shovel\" href="#"><img src="'+img_shovel+'"></a>' );
		
		$('#gold_shovel').click( function( e ) {
			e.preventDefault();
			
			var links = [];
			$('.shovel_on a').each( function () {
				links.push(this.href);
			} );

			for ( var i in links )
				window.open( links[i], '_blank' );
		
		} );
		
	},

	make_gold_shovel_resume : function () {
		
		$('.users-table th:eq(9)').html( '<a id=\"gold_shovel\" href="#"><img src="'+img_shovel+'"></a>' );
		
		$('#gold_shovel').click( function( e ) {
			e.preventDefault();
			
			var links = [];
			$('.users-table tr').each( function () {
				let link = $(this).find('td:eq(9) a').attr( 'href' );
				if ( link && link.match( /resume\/edit/i ) )
					links.push( link );
			} );
			
			for ( var i in links )
				window.open( links[i], '_blank' );
		
		} );
		
	}
	
};

// обработка событий
$(document).ready( function() {

	if ( document.location.href.match( /http[s]?:\/\/[\w\W]*?rdw.ru\/vacancy\/edit\/[\d]{4,8}/i ) &&  document.location.href.indexOf( '#noscript' ) < 0 )
		hydra.editing();
	
	
	if ( document.location.href.match( /http[s]?:\/\/[\w\W]*?rdw.ru\/vacancy\/moderlist/i ) ) 
		visual.make_gold_shovel();
	
	if ( document.location.href.match( /http[s]?:\/\/[\w\W]*?rdw.ru\/resume\/unchecked/i ) ) 
		visual.make_gold_shovel_resume();
		 
} ); 

if ( document.location.href.match( /http[s]?:\/\/[\w\W]*?rdw.ru\/vacancy\/edit\/[\d]{4,8}/i ) )
	$(document).keypress( function ( e ) {
		
		/*  if ( e.ctrlKey == true && e.keyCode == 2 )
			hydra.editing(); */

		if ( e.keyCode == 96 || e.keyCode == 1105 ) {
			e.preventDefault();
			$('button[name=moderate_true]').click();
		}
		
		if ( e.ctrlKey == true && e.keyCode == 17 && document.location.href.indexOf( '#noscript' ) < 0 ) {	
			e.preventDefault();
			document.location.hash = '#noscript';
			document.location.reload();
			return;
		}
		
		if ( e.ctrlKey == true && e.keyCode == 17 && document.location.href.indexOf( '#noscript' ) >= 0 ) {	
			e.preventDefault();
			document.location.hash = '';
			document.location.reload();
			return;
		}
		
	} );

	
if ( document.location.href.match( /http[s]?:\/\/[\w\W]*?rdw.ru\/resume\/edit\/step[\d]+\/[\d]{4,8}/i ) )
	$(document).keypress( function ( e ) {
		
		if ( e.keyCode == 96 || e.keyCode == 1105 ) {
			e.preventDefault();
			if ( $('#cv_form input[type=submit]').length == 2 )
				$('#cv_form input[type=submit]').eq(0).click();
			else if ( $('form .module input[type=submit]').length == 2 )
				$('form .module input[type=submit]').eq(0).click();
		}
		
	} );
