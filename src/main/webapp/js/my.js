function deleteById(sp,id){
	if(confirm("确认要删除编号为"+id+"记录吗?")){
		location.href = "../deleteById/"+sp+"/"+id;
	}
}